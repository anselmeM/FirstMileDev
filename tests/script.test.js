/**
 * @jest-environment node
 */

// Mock global dependencies before requiring the script
global.lucide = {
    createIcons: jest.fn()
};

global.gsap = {
    registerPlugin: jest.fn(),
    timeline: jest.fn(() => ({
        to: jest.fn().mockReturnThis()
    })),
    utils: {
        toArray: jest.fn(() => [])
    },
    to: jest.fn(),
    globalTimeline: {
        clear: jest.fn()
    }
};

global.ScrollTrigger = {};

global.window = {
    matchMedia: jest.fn(() => ({
        matches: false,
        addEventListener: jest.fn()
    })),
    addEventListener: jest.fn(),
    scrollTo: jest.fn(),
    innerHeight: 1000,
    pageYOffset: 0,
    requestAnimationFrame: jest.fn(cb => cb())
};

const mockElement = {
    addEventListener: jest.fn(),
    classList: {
        add: jest.fn(),
        remove: jest.fn(),
        contains: jest.fn()
    },
    style: {},
    querySelector: jest.fn(() => ({ style: {} })),
    querySelectorAll: jest.fn(() => []),
    getAttribute: jest.fn(),
    offsetHeight: 100,
    offsetTop: 100
};

global.document = {
    getElementById: jest.fn((id) => {
        if (id === 'exit-intent-popup') {
            return {
                addEventListener: jest.fn(),
                querySelectorAll: jest.fn(() => []),
                classList: { contains: jest.fn(), add: jest.fn(), remove: jest.fn() }
            };
        }
        return null;
    }),
    querySelectorAll: jest.fn(() => []),
    addEventListener: jest.fn(),
    documentElement: {
        scrollTop: 0,
        scrollHeight: 2000
    },
    querySelector: jest.fn(() => mockElement),
    activeElement: null
};

// Import the function after mocks
const { showCkForm, handleLeadCapture, dismissPopupsAtContactSection, getExitPopup } = require('../script');

describe('dismissPopupsAtContactSection', () => {
    let elements;

    beforeEach(() => {
        jest.clearAllMocks();
        elements = {};
        global.document.getElementById.mockImplementation((id) => elements[id] || null);

        // Clear the caches before each test
        if (dismissPopupsAtContactSection.cache) {
            delete dismissPopupsAtContactSection.cache;
        }
        if (getExitPopup.cache) {
            delete getExitPopup.cache;
        }
    });

    test('should dismiss popups when contact section is visible', () => {
        const mockContact = { offsetTop: 500, offsetHeight: 200 };
        const mockExitPopup = {
            classList: {
                contains: jest.fn().mockReturnValue(true),
                remove: jest.fn()
            }
        };
        const mockCta50 = {
            classList: { remove: jest.fn() },
            querySelector: jest.fn().mockReturnValue({ style: {} })
        };

        elements['contact'] = mockContact;
        elements['exit-intent-popup'] = mockExitPopup;
        elements['scroll-cta-50'] = mockCta50;

        // Mock scroll position to make contact visible
        // scrollTop (0) + windowHeight (1000) > contactTop (500) + 100
        global.window.pageYOffset = 0;
        global.window.innerHeight = 1000;

        dismissPopupsAtContactSection();

        expect(mockExitPopup.classList.remove).toHaveBeenCalledWith('active');
        expect(mockCta50.classList.remove).toHaveBeenCalledWith('visible');
    });

    test('should NOT dismiss popups when contact section is NOT visible', () => {
        const mockContact = { offsetTop: 2000, offsetHeight: 200 };
        const mockExitPopup = {
            classList: {
                contains: jest.fn().mockReturnValue(true),
                remove: jest.fn()
            }
        };

        elements['contact'] = mockContact;
        elements['exit-intent-popup'] = mockExitPopup;

        // Mock scroll position to make contact NOT visible
        // scrollTop (0) + windowHeight (1000) <= contactTop (2000) + 100
        global.window.pageYOffset = 0;
        global.window.innerHeight = 1000;

        dismissPopupsAtContactSection();

        expect(mockExitPopup.classList.remove).not.toHaveBeenCalled();
    });
});

describe('showCkForm', () => {
    let elements;

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        // Initialize an empty map for elements
        elements = {};

        // Setup getElementById to return items from our map, or null if not found
        global.document.getElementById.mockImplementation((id) => {
            return elements[id] || null;
        });
    });

    test('should show form and hide download button when elements exist', () => {
        const mockFormContainer = { style: { display: 'none' } };
        const mockDownloadBtn = { style: { display: 'block' } };

        elements['ck-form-123'] = mockFormContainer;
        elements['download-btn-123'] = mockDownloadBtn;

        showCkForm('123');

        expect(mockFormContainer.style.display).toBe('block');
        expect(mockDownloadBtn.style.display).toBe('none');
    });

    test('should handle missing formContainer gracefully', () => {
        const mockDownloadBtn = { style: { display: 'block' } };

        elements['download-btn-missing-form'] = mockDownloadBtn;

        expect(() => showCkForm('missing-form')).not.toThrow();
        expect(mockDownloadBtn.style.display).toBe('none');
    });

    test('should handle missing downloadBtn gracefully', () => {
        const mockFormContainer = { style: { display: 'none' } };

        elements['ck-form-missing-btn'] = mockFormContainer;

        expect(() => showCkForm('missing-btn')).not.toThrow();
        expect(mockFormContainer.style.display).toBe('block');
    });

    test('should handle both elements missing gracefully', () => {
        expect(() => showCkForm('both-missing')).not.toThrow();
    });
});

describe('handleLeadCapture', () => {
    let elements;

    beforeEach(() => {
        jest.clearAllMocks();
        elements = {};
        global.document.getElementById.mockImplementation((id) => {
            return elements[id] || null;
        });

        // Clear the caches before each test
        if (getExitPopup.cache) {
            delete getExitPopup.cache;
        }

        // Mock document.createElement
        global.document.createElement = jest.fn((tagName) => ({
            tagName: tagName.toUpperCase(),
            style: {},
            setAttribute: jest.fn(),
            appendChild: jest.fn(),
            classList: {
                add: jest.fn()
            }
        }));

        global.setTimeout = jest.fn();
    });

    test('should handle lead capture and update form UI', () => {
        jest.useFakeTimers();
        jest.spyOn(global, 'setTimeout');

        const mockForm = {
            replaceChildren: jest.fn()
        };
        const mockEmailInput = { value: 'test@example.com' };

        const mockExitPopup = {
            classList: {
                remove: jest.fn()
            }
        };

        elements['lead-capture-form'] = mockForm;
        elements['lead-email'] = mockEmailInput;
        elements['exit-intent-popup'] = mockExitPopup;

        const mockEvent = { preventDefault: jest.fn() };

        handleLeadCapture(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalled();

        // Should create elements
        expect(document.createElement).toHaveBeenCalledWith('div');
        expect(document.createElement).toHaveBeenCalledWith('i');
        expect(document.createElement).toHaveBeenCalledWith('p');

        // Should replace children with the new container
        const container = document.createElement.mock.results[0].value;
        expect(mockForm.replaceChildren).toHaveBeenCalledWith(container);

        expect(global.lucide.createIcons).toHaveBeenCalled();
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 3000);

        // Fast-forward time to trigger setTimeout
        jest.runAllTimers();

        // Ensure closeExitPopup was called
        expect(mockExitPopup.classList.remove).toHaveBeenCalledWith('active');

        jest.useRealTimers();
    });
});

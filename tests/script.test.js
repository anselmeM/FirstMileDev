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
            return mockElement;
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
const { showCkForm, handleLeadCapture, handleScrollSpy } = require('../script');

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

        elements['lead-capture-form'] = mockForm;
        elements['lead-email'] = mockEmailInput;

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
        expect(mockElement.classList.remove).toHaveBeenCalledWith('active');

        jest.useRealTimers();
    });
});

describe('handleScrollSpy', () => {
    let mockSections;
    let mockNavLinks;
    let handleScrollSpyMod;

    beforeEach(() => {
        // Reset scroll position
        global.document.documentElement.scrollTop = 0;
        global.window.pageYOffset = 0;

        mockSections = [
            { getAttribute: () => 'section1', offsetTop: 200, offsetHeight: 500 },
            { getAttribute: () => 'section2', offsetTop: 700, offsetHeight: 500 },
            { getAttribute: () => 'section3', offsetTop: 1200, offsetHeight: 500 },
        ];

        mockNavLinks = [
            { getAttribute: () => '#section1', classList: { remove: jest.fn(), add: jest.fn() } },
            { getAttribute: () => '#section2', classList: { remove: jest.fn(), add: jest.fn() } },
            { getAttribute: () => '#section3', classList: { remove: jest.fn(), add: jest.fn() } },
        ];

        // Mock document methods for ScrollSpy
        global.document.querySelectorAll = jest.fn((selector) => {
            if (selector === 'section[id]') return mockSections;
            if (selector === 'header nav a[href*="#"]') return mockNavLinks;
            return [];
        });

        global.document.querySelector = jest.fn((selector) => {
            if (selector.includes('href$="#section1"')) return mockNavLinks[0];
            if (selector.includes('href$="#section2"')) return mockNavLinks[1];
            if (selector.includes('href$="#section3"')) return mockNavLinks[2];
            return mockElement;
        });

        // Clear mock histories
        jest.clearAllMocks();

        // Ensure getElementById works during require
        global.document.getElementById.mockImplementation((id) => {
            if (id === 'exit-intent-popup') return mockElement;
            return null;
        });

        // Re-require to reset top-level section cache
        jest.resetModules();
                handleScrollSpyMod = require('../script').handleScrollSpy;

        // Clear mocks again to ignore top-level querySelector calls during module evaluation
        jest.clearAllMocks();
    });

    test('should cache nav links and section mappings on first call', () => {
        // The first call actually happened during require('../script') because of the top-level handleScrollSpy() call.
        // So the cache is already populated.
        // We can verify that calling it again does NOT hit the DOM.

        jest.clearAllMocks();
        handleScrollSpyMod();
        expect(global.document.querySelectorAll).not.toHaveBeenCalledWith('header nav a[href*="#"]');
        expect(global.document.querySelector).not.toHaveBeenCalled();
    });

    test('should add active class to the correct navigation link based on scroll position', () => {
        // Simulate scroll into section 2
        global.window.pageYOffset = 800; // section2 is 700-150=550 to 1050

        handleScrollSpyMod();

        // Should remove from all
        mockNavLinks.forEach(link => {
            expect(link.classList.remove).toHaveBeenCalledWith('nav-link-active');
        });

        // Should add to section 2 only
        expect(mockNavLinks[1].classList.add).toHaveBeenCalledWith('nav-link-active');
        expect(mockNavLinks[0].classList.add).not.toHaveBeenCalled();
        expect(mockNavLinks[2].classList.add).not.toHaveBeenCalled();
    });

    test('should update active class when scrolling to a new section', () => {
        // Scroll to section 1
        global.window.pageYOffset = 300; // section1 is 200-150=50 to 550
        handleScrollSpyMod();
        expect(mockNavLinks[0].classList.add).toHaveBeenCalledWith('nav-link-active');

        // Reset mocks to track new calls clearly
        jest.clearAllMocks();

        // Scroll to section 3
        global.window.pageYOffset = 1300; // section3 is 1200-150=1050 to 1550
        handleScrollSpyMod();

        // Should remove from all (including section 1)
        mockNavLinks.forEach(link => {
            expect(link.classList.remove).toHaveBeenCalledWith('nav-link-active');
        });

        // Should add to section 3
        expect(mockNavLinks[2].classList.add).toHaveBeenCalledWith('nav-link-active');
        expect(mockNavLinks[0].classList.add).not.toHaveBeenCalled();
        expect(mockNavLinks[1].classList.add).not.toHaveBeenCalled();
    });
});

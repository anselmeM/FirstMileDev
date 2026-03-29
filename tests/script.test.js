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
    getElementById: jest.fn(() => mockElement),
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
const { showCkForm } = require('../script');

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

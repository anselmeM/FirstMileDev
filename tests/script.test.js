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
    let mockFormContainer;
    let mockDownloadBtn;

    beforeEach(() => {
        // Reset mocks before each test
        jest.clearAllMocks();

        // Setup mock elements
        mockFormContainer = { style: { display: 'none' } };
        mockDownloadBtn = { style: { display: 'block' } };

        // Setup getElementById to return our mock elements
        global.document.getElementById.mockImplementation((id) => {
            if (id === 'ck-form-123') return mockFormContainer;
            if (id === 'download-btn-123') return mockDownloadBtn;
            return mockElement;
        });
    });

    test('should show form and hide download button when elements exist', () => {
        showCkForm('123');

        expect(mockFormContainer.style.display).toBe('block');
        expect(mockDownloadBtn.style.display).toBe('none');
    });

    test('should handle missing formContainer gracefully', () => {
        // Mock download button only
        global.document.getElementById.mockImplementation((id) => {
            if (id === 'download-btn-missing-form') return mockDownloadBtn;
            if (id.startsWith('ck-form-')) return null;
            return mockElement;
        });

        expect(() => showCkForm('missing-form')).not.toThrow();
        expect(mockDownloadBtn.style.display).toBe('none');
    });

    test('should handle missing downloadBtn gracefully', () => {
        // Mock form container only
        global.document.getElementById.mockImplementation((id) => {
            if (id === 'ck-form-missing-btn') return mockFormContainer;
            if (id.startsWith('download-btn-')) return null;
            return mockElement;
        });

        expect(() => showCkForm('missing-btn')).not.toThrow();
        expect(mockFormContainer.style.display).toBe('block');
    });

    test('should handle both elements missing gracefully', () => {
        global.document.getElementById.mockImplementation((id) => {
            if (id.startsWith('ck-form-') || id.startsWith('download-btn-')) return null;
            return mockElement;
        });

        expect(() => showCkForm('both-missing')).not.toThrow();
    });
});

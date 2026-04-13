/**
 * @jest-environment node
 */

// Simple manual mock for DOM-like behavior since jsdom is missing
class MockClassList {
    constructor() {
        this.classes = new Set();
    }
    add(className) {
        this.classes.add(className);
    }
    remove(className) {
        this.classes.delete(className);
    }
    contains(className) {
        return this.classes.has(className);
    }
}

class MockElement {
    constructor(id = '', classes = []) {
        this.id = id;
        this.classList = new MockClassList();
        classes.forEach(c => this.classList.add(c));
    }
}

// Mock GSAP and Lucide to prevent errors when requiring script.js
global.lucide = {
    createIcons: jest.fn(),
};

global.gsap = {
    registerPlugin: jest.fn(),
    timeline: jest.fn().mockReturnValue({
        to: jest.fn().mockReturnThis(),
        play: jest.fn(),
        reverse: jest.fn(),
    }),
    utils: {
        toArray: jest.fn().mockReturnValue([]),
    },
    to: jest.fn(),
};

global.ScrollTrigger = jest.fn();

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

// Mock document.querySelectorAll and document.getElementById
let mockElements = [];
global.document = {
    querySelectorAll: jest.fn().mockImplementation((selector) => {
        if (selector === '.faq-item') {
            return mockElements;
        }
        return [];
    }),
    getElementById: jest.fn().mockImplementation((id) => {
        const found = mockElements.find(el => el.id === id);
        if (found) return found;
        return {
            addEventListener: jest.fn(),
            classList: new MockClassList(),
            style: {},
            querySelector: jest.fn().mockReturnValue({ style: {} }),
            querySelectorAll: jest.fn().mockReturnValue([]),
            offsetHeight: 100,
            offsetTop: 100
        };
    }),
    querySelector: jest.fn().mockImplementation(() => ({
        addEventListener: jest.fn(),
        classList: new MockClassList(),
        style: {},
        querySelector: jest.fn().mockReturnValue({ style: {} }),
        querySelectorAll: jest.fn().mockReturnValue([]),
        offsetHeight: 100,
        offsetTop: 100
    })),
    body: {
        classList: new MockClassList()
    },
    addEventListener: jest.fn(),
    documentElement: {
        scrollTop: 0,
        scrollHeight: 2000
    }
};

const { toggleFaq } = require('../script.js');

describe('toggleFaq', () => {
    let faq1, faq2, faq3;

    beforeEach(() => {
        faq1 = new MockElement('faq1');
        faq2 = new MockElement('faq2', ['active']);
        faq3 = new MockElement('faq3');
        mockElements = [faq1, faq2, faq3];
        jest.clearAllMocks();
    });

    test('should activate an inactive FAQ item and deactivate others', () => {
        // Initially faq2 is active, faq1 is not
        expect(faq1.classList.contains('active')).toBe(false);
        expect(faq2.classList.contains('active')).toBe(true);

        toggleFaq(faq1);

        // Now faq1 should be active, faq2 should not
        expect(faq1.classList.contains('active')).toBe(true);
        expect(faq2.classList.contains('active')).toBe(false);
    });

    test('should deactivate an active FAQ item when clicked', () => {
        // Initially faq2 is active
        expect(faq2.classList.contains('active')).toBe(true);

        toggleFaq(faq2);

        // Now faq2 should not be active
        expect(faq2.classList.contains('active')).toBe(false);
    });

    test('should handle multiple FAQ items correctly', () => {
        toggleFaq(faq3);

        expect(faq1.classList.contains('active')).toBe(false);
        expect(faq2.classList.contains('active')).toBe(false);
        expect(faq3.classList.contains('active')).toBe(true);
    });
});

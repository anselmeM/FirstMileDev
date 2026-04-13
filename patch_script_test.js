--- tests/script.test.js
+++ tests/script.test.js
@@ -51,13 +51,15 @@
     offsetTop: 100
 };

+const mockExitPopupGlobal = {
+    addEventListener: jest.fn(),
+    querySelectorAll: jest.fn(() => []),
+    classList: { contains: jest.fn(), add: jest.fn(), remove: jest.fn() }
+};
+
 global.document = {
     getElementById: jest.fn((id) => {
         if (id === 'exit-intent-popup') {
-            return {
-                addEventListener: jest.fn(),
-                querySelectorAll: jest.fn(() => []),
-                classList: { contains: jest.fn(), add: jest.fn(), remove: jest.fn() }
-            };
+            return mockExitPopupGlobal;
         }
         return null;
     }),
@@ -161,15 +163,8 @@
         };
         const mockEmailInput = { value: 'test@example.com' };

-        const mockExitPopup = {
-            classList: {
-                remove: jest.fn()
-            }
-        };
-
         elements['lead-capture-form'] = mockForm;
         elements['lead-email'] = mockEmailInput;
-        elements['exit-intent-popup'] = mockExitPopup;

         const mockEvent = { preventDefault: jest.fn() };

@@ -192,7 +187,7 @@
         jest.runAllTimers();

         // Ensure closeExitPopup was called
-        expect(mockExitPopup.classList.remove).toHaveBeenCalledWith('active');
+        expect(mockExitPopupGlobal.classList.remove).toHaveBeenCalledWith('active');

         jest.useRealTimers();
     });

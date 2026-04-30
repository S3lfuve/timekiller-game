"use strict";

function isTouchOnlyDevice() {
  const coarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  const hoverPointer = window.matchMedia?.("(hover: hover)")?.matches ?? false;
  return (navigator.maxTouchPoints || 0) > 0 && coarsePointer && !hoverPointer;
}

function isMobileViewport() {
  return isTouchOnlyDevice();
}

function effectiveControlType() {
  if (isMobileViewport()) return "joystick";
  return runtime.settings?.controlType || "keyboard";
}

function gameplayCameraZoom() {
  return isMobileViewport() ? 0.9 : 1;
}

function isTextInputElement(element) {
  if (!element) return false;
  const tag = element.tagName;
  return element.isContentEditable || tag === "INPUT" || tag === "TEXTAREA";
}

function isTextInputActive() {
  return isTextInputElement(document.activeElement);
}

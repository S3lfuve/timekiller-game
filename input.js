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

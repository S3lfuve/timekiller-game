"use strict";

function makeRazerSaw(scene, level) {
  const cfg = RAZER_CONFIG[level] || RAZER_CONFIG[1];
  const graphics = scene.add.graphics();
  const outer = level >= 3 ? 14.7 : 13.5;
  const inner = level >= 3 ? 8.6 : 8;
  const points = [];

  for (let i = 0; i < 18; i += 1) {
    const angle = -Math.PI / 2 + (i / 18) * Math.PI * 2;
    const radius = i % 2 === 0 ? outer : inner;
    points.push(new Phaser.Geom.Point(Math.cos(angle) * radius, Math.sin(angle) * radius));
  }

  graphics.fillStyle(cfg.color, 0.92);
  graphics.fillPoints(points, true);
  graphics.lineStyle(1.5, cfg.stroke, 0.78);
  graphics.strokePoints(points, true);
  graphics.fillStyle(level >= 3 ? 0x3a2942 : 0x2c2222, 0.8);
  graphics.fillCircle(0, 0, 4.4);
  return graphics;
}

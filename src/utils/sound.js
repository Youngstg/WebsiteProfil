/**
 * Mechanical Keyboard Switch Audio Synthesizer
 * Uses Web Audio API to create authentic Cherry MX / Gateron mechanical switch sound:
 * - High-frequency tactile click transient (burst)
 * - Deep, resonant bottom-out thock (body resonance)
 * - Slight pitch variation per keystroke for natural acoustic realism
 * Zero external audio files required!
 */

class MechanicalSwitchAudio {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(muted) {
    this.isMuted = muted;
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  playPress() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const pitchVar = 0.94 + Math.random() * 0.12;

    // 1. Tactile Click Transient (Crisp mechanical leaf click)
    const clickOsc = ctx.createOscillator();
    const clickGain = ctx.createGain();
    clickOsc.type = 'triangle';
    clickOsc.frequency.setValueAtTime(1400 * pitchVar, now);
    clickOsc.frequency.exponentialRampToValueAtTime(320 * pitchVar, now + 0.018);

    clickGain.gain.setValueAtTime(0.22, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

    clickOsc.connect(clickGain);
    clickGain.connect(ctx.destination);
    clickOsc.start(now);
    clickOsc.stop(now + 0.025);

    // 2. Switch Housing "Thock" (PBT keycap bottom-out resonance)
    const thockOsc = ctx.createOscillator();
    const thockGain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    thockOsc.type = 'sine';
    thockOsc.frequency.setValueAtTime(260 * pitchVar, now + 0.003);
    thockOsc.frequency.exponentialRampToValueAtTime(80 * pitchVar, now + 0.055);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    thockGain.gain.setValueAtTime(0.28, now + 0.003);
    thockGain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    thockOsc.connect(filter);
    filter.connect(thockGain);
    thockGain.connect(ctx.destination);
    thockOsc.start(now + 0.003);
    thockOsc.stop(now + 0.065);
  }

  playRelease() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    const ctx = this.ctx;
    const now = ctx.currentTime;
    const pitchVar = 0.95 + Math.random() * 0.1;

    // Switch Return Spring Clack
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(580 * pitchVar, now);
    osc.frequency.exponentialRampToValueAtTime(180 * pitchVar, now + 0.02);

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.022);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.025);
  }
}

export const soundManager = new MechanicalSwitchAudio();

// Drawing Canvas functionality
class DrawingCanvas {
    constructor() {
        this.canvas = document.getElementById('drawing-canvas');
        this.ctx = null;
        this.isDrawing = false;
        this.currentColor = 'black';
        
        this.init();
    }
    
    init() {
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        this.setupEventListeners();
        this.setupColorButtons();
    }
    
    setupCanvas() {
        this.resizeCanvas();
        
        // Set initial drawing styles
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = this.currentColor;
    }
    
    resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        const parent = this.canvas.parentElement;
        
        this.canvas.width = parent.clientWidth * dpr;
        this.canvas.height = (parent.clientWidth * 0.6) * dpr;
        
        this.canvas.style.width = `${parent.clientWidth}px`;
        this.canvas.style.height = `${parent.clientWidth * 0.6}px`;
        
        this.ctx.scale(dpr, dpr);
    }
    
    getPosition(e) {
        const rect = this.canvas.getBoundingClientRect();
        const evt = e.touches ? e.touches[0] : e;
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }
    
    startDrawing(e) {
        this.isDrawing = true;
        const { x, y } = this.getPosition(e);
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
    }
    
    draw(e) {
        if (!this.isDrawing) return;
        e.preventDefault();
        
        const { x, y } = this.getPosition(e);
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
    
    stopDrawing() {
        this.isDrawing = false;
        this.ctx.closePath();
    }
    
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    changeColor(color) {
        this.currentColor = color;
        this.ctx.strokeStyle = color;
        
        // Update active color button
        document.querySelectorAll('.color-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        document.querySelector(`.color-btn[data-color="${color}"]`).classList.add('active');
    }
    
    setupEventListeners() {
        // Mouse events
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseleave', () => this.stopDrawing());
        
        // Touch events
        this.canvas.addEventListener('touchstart', (e) => this.startDrawing(e));
        this.canvas.addEventListener('touchmove', (e) => this.draw(e));
        this.canvas.addEventListener('touchend', () => this.stopDrawing());
        
        // Window resize
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    setupColorButtons() {
        const controls = document.getElementById('canvas-controls');
        if (!controls) return;
        
        controls.addEventListener('click', (e) => {
            // Color buttons
            if (e.target.dataset.color) {
                this.changeColor(e.target.dataset.color);
            }
            
            // Clear button
            if (e.target.closest('#clear-canvas-btn')) {
                this.clearCanvas();
            }
        });
    }
}

// Initialize canvas when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DrawingCanvas();
});

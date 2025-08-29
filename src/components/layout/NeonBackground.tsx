'use client';

import { useEffect, useRef, ReactNode } from 'react';

type NeonBackgroundProps = {
    children?: ReactNode;
};

const NeonBackground = ({ children }: NeonBackgroundProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        class Particle {
            x: number;
            y: number;
            radius: number;
            dx: number;
            dy: number;
            color: string;

            constructor() {
                this.x = 0;
                this.y = 0;
                this.radius = 0;
                this.dx = 0;
                this.dy = 0;
                this.color = '';
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.radius = Math.random() * 3 + 3;
                this.dx = (Math.random() - 0.5) * 6;
                this.dy = (Math.random() - 0.5) * 6;
                this.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            }

            update() {
                this.x += this.dx;
                this.y += this.dy;

                if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                    this.reset();
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 8;
                ctx.shadowColor = this.color;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const particles: Particle[] = Array.from({ length: 20 }, () => new Particle());

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw(ctx);
            });
            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
            />
            <div className="flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default NeonBackground;

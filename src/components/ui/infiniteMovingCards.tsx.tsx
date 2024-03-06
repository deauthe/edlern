"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "./card";
import { IconType } from "react-icons/lib";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		title: string;
		icon: IconType;
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 w-fit overflow-hidden bg-black mx-auto",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex w-full  gap-4 py-4 flex-nowrap ",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item, idx) => {
					const Icon = item.icon;
					return (
						<li
							className="w-fit  relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6  text-white "
							style={{
								background:
									"linear-gradient(180deg, var(--zinc-800), var(--zinc-900) ",
							}}
							key={item.title}
						>
							<blockquote className=" w-fit">
								<div
									aria-hidden="true"
									className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
								></div>
								<span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
									<Icon className="text-4xl mx-auto text-blue-200" />
								</span>
								<div className="relative z-20 mt-6 flex flex-row items-center">
									<span className="flex flex-col gap-1">
										<span className=" leading-[1.6] text-gray-400 font-normal text-lg text-center justify-end flex-col flex mx-auto ">
											{item.title}
										</span>
									</span>
								</div>
							</blockquote>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

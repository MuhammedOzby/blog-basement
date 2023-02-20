import React, { Component, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Transition, Variants, motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.cjs';

export default class MainPages extends Component {
	public SOCIAL_NETWORKS: Array<{
		title: string;
		address: string;
		icon: JSX.Element;
	}>;
	TR_MENU: { title: string; key: string }[];
	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.TR_MENU = [
			{ title: 'ANA SAYFA', key: '' },
			{ title: 'YAZILAR', key: 'articles' },
			{ title: 'HAKKIMDA', key: 'about-me' },
			{ title: 'İLETİŞİM', key: 'contact' },
			{ title: 'ÖZGEÇMİŞ', key: 'resume' },
		];
		this.SOCIAL_NETWORKS = [
			{
				title: 'GitHub',
				address: 'https://github.com/MuhammedOzby/',
				icon: <BsGithub />,
			},
			{
				title: 'Linkedin',
				address: 'https://www.linkedin.com/in/muhammed-mustafa-ozbay/',
				icon: <BsLinkedin />,
			},
			{
				title: 'YouTube',
				address: 'https://www.youtube.com/channel/UCkbcLhVSDADy9BhgxFjOI3Q',
				icon: <BsYoutube />,
			},
			{
				title: 'Twitter',
				address: 'https://twitter.com/KaranlikDiyar',
				icon: <BsTwitter />,
			},
		];
	}
	private TR_MENU_LIST(isDesktop: boolean = false): React.ReactNode {
		return this.TR_MENU.map((data) => (
			<li key={`${data.key}-menu-tr`}>
				<Link to={`/${data.key}`} replace={true} key={`${data.key}-mobile-menu-tr-link`}>
					<p className={`title is-size-6`}>{data.title}</p>
				</Link>
			</li>
		));
	}
	render() {
		return (
			<>
				<div className="tile is-ancestor" style={{ margin: 0, height: '100%', zIndex: 10, position: 'relative' }}>
					<div className="tile is-vertical is-12">
						<HeadLine />
						<div className="tile is-horizontal">
							<div className="tile is-parent is-1">
								<div className="content">
									<ul className="menu">{this.TR_MENU_LIST()}</ul>
								</div>
							</div>
							<div className="tile is-parent is-11">
								<article className="tile is-child">
									<div className="content">
										<ContentArea />
									</div>
								</article>
							</div>
						</div>
						<div className="tile is-parent">
							{this.SOCIAL_NETWORKS.map((data) => (
								<a href={data.address} key={data.title} className="social-icons">
									{data.icon}
								</a>
							))}
						</div>
					</div>
				</div>
				<Canvas style={{ position: 'fixed', top: 0, zIndex: 0 }} camera={{ position: [0, 0, 1] }}>
					<Stars />
				</Canvas>
			</>
		);
	}
}

function HeadLine() {
	return (
		<div className="tile is-parent" style={{ maxHeight: '105px' }}>
			<article className="tile is-child">
				<p className="title is-size-3">Muhammed Mustafa ÖZBAY</p>
				<p className="subtitle">YAZILIM GELİŞTİRİCİ / SOFTWARE DEVELOPER</p>
				<hr className="m-1" />
			</article>
		</div>
	);
}

function Stars(props: object) {
	const ref = useRef<any>();
	const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
				<PointMaterial transparent color="gray" size={0.005} sizeAttenuation={true} depthWrite={false} />
			</Points>
		</group>
	);
}

function ContentArea() {
	const location = useLocation();
	const pageVariants: Variants = {
		initial: {
			opacity: 0,
			x: 20,
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: 20,
		},
	};

	const pageTransition: Transition = {
		type: 'tween',
		ease: 'easeIn',
		duration: 0.5,
	};

	return (
		<motion.div
			key={location.key}
			initial="initial"
			animate="in"
			variants={pageVariants}
			transition={pageTransition}
			style={{ width: '100%' }}>
			<Outlet />
		</motion.div>
	);
}

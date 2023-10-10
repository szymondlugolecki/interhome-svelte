declare module '$assets/*' {
	const image: Record<string, never>[];
	export default image;
}

declare module 'photoswipe/lightbox' {
	import PhotoSwipeLightBox from 'photoswipe/dist/types/lightbox/lightbox';
	export default PhotoSwipeLightBox;
}

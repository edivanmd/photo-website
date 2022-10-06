const style = {
    // Banner Home
    bannerWrap: 'flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img',
    bannerOverlay: 'absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]',
    bannerTextBox: 'p-5 text-white z-[2] mt-[-10rem]',
    bannerTitle: 'text-5xl font-bold',
    bannerText: 'py-5 text-xl',
    bannerButton: 'px-8 py-2 border',

    // Navbar
    navbarWrap: 'fixed left-0 top-0 w-full z-10 ease-in duration-300',
    navbarInner: 'max-w-[1240px] m-auto flex justify-between items-center p-4 text-white',
    navbarLogo: 'font-bold text-5xl',
    
    navbarGroupLinks: 'hidden sm:flex',
    navbarLink: 'p-4 hover:text-gray-500',
    
    navbarBtnMenuMobile: 'block sm:hidden z-10',
    navbarLinkMobile: 'p-4 hover:text-gray-500 text-4xl',

    //Gallery
    galleryWrap: 'max-w-[1240px] mx-auto',
    galleryImagesWrap: 'relative flex justify-content p-4',
    galleryLeftArrow: 'absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]',
    galleryRightArrow: 'absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]',

    // Instagram
    instagramWrap: 'max-w-[1240px] mx-auto text-center py-24',
    instagramWrapAddress: 'pb-4',

    //Instagram Images
    instagramImgWrap: 'relative',
    instagramImgWrapImage: 'w-full h-full',
    instagramImgWrapOverlay: 'flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group',
    instagramImgWrapIgTag: 'text-gray-300 hidden group-hover:block',

    //General Styles
    titleH2: 'text-4xl font-bold text-center p-4',
    titleH3: 'text-2xl font-bold text-center p-4',
}

export default style;
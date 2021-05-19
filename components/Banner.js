export default function Banner() {
    return (
        <>
            <div>
                <picture>
                    <source srcSet="/image/bannerwebsite.webp" type="image/webp"/>
                    <source srcSet="/image/bannerwebsite.png" type="image/png"/>
                    <img className="w-full hidden sm:block" src="/image/bannerwebsite.png" width="1920" height="600" alt="mobilebanner"/>
                </picture>
                <picture>
                    <source srcSet="/image/mobilebanner.webp" type="image/webp"/>
                    <source srcSet="/image/mobilebanner.png" type="image/png"/>
                    <img className="w-full block sm:hidden" src="/image/mobilebanner.png" width="600" height="600" alt="banner" />
                </picture>
            </div>
        </>
    )
}
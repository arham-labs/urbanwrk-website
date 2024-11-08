export default function HomeBanner() {

    return (
        <>
            <section className="bg-cover bg-no-repeat relative h-screen">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute right-0 left-0 top-0 w-full h-full object-cover back-video bottom-0 -z-[1]"
                >
                    <source src="/videos/home-video.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    );
}

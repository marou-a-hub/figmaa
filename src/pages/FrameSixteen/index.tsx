import React from "react";
import { Helmet } from "react-helmet";
import { Text, RatingBar, Heading, Img, Slider } from "../../components";
import AliceCarousel, { EventObject, DotsItem } from "react-alice-carousel";

export default function FrameSixteenPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef<AliceCarousel>(null);

  return (
    <>
      <Helmet>
        <title>Customer Testimonials - Hear What Our Buyers Say</title>
        <meta
          name="description"
          content="Read testimonials from satisfied customers like Michael Wong and Avril Song. Discover why our clients recommend us for our exceptional service and quality."
        />
      </Helmet>

      {/* testimonial section */}
      <div className="flex w-full flex-col items-center justify-center gap-[73px] bg-white-A700 px-14 py-[79px] md:gap-[54px] md:p-5 sm:gap-9">
        {/* testimonial header section */}
        <div className="flex flex-col items-center gap-[9px]">
          <Text size="s" as="p" className="!text-blue_gray-900_8e">
            Testimonial
          </Text>
          <Text size="md" as="p" className="text-center !font-playfairdisplay">
            What our buyers say
          </Text>
        </div>

        {/* testimonial slider section */}
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10">
          <div className="flex w-full gap-8 self-stretch md:flex-col">
            {/* testimonial slider content section */}
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{ "0": { items: 1 }, "550": { items: 1 }, "1050": { items: 3 } }}
              renderDotsItem={(props: DotsItem) => {
                return props?.isActive ? (
                  <div className="mr-1 h-[8px] w-[8px] bg-red_900" />
                ) : (
                  <div className="mr-1 h-[8px] w-[8px] bg-blue_gray-100" />
                );
              }}
              activeIndex={sliderState}
              onSlideChanged={(e: EventObject) => {
                setSliderState(e?.item);
              }}
              ref={sliderRef}
              items={[...Array(9)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="mx-2.5 flex w-full flex-col items-center gap-4 rounded-[24px] bg-white-A700 p-6 md:mx-0 sm:p-5">
                    <div className="flex w-[91%] items-center gap-4 md:w-full">
                      <Img
                        src="images/img_ellipse_1.png"
                        alt="circleimage"
                        className="h-[100px] w-[100px] rounded-[50%]"
                      />
                      <div className="flex w-[44%] flex-col items-start gap-[5px]">
                        <Heading as="h1" className="text-center">
                          Michael Wong
                        </Heading>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#d9d9d9"
                          activeColor="#ffb21e"
                          size={24}
                          className="flex justify-between rounded-[1px]"
                        />
                      </div>
                    </div>
                    <Text as="p" className="w-[91%] leading-[140%] md:w-full">
                      Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus
                      amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel
                      tortor dui adipiscing.
                    </Text>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

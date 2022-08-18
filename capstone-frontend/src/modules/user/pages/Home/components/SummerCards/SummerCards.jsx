import React from 'react';
import Summercard from './component/Summercard';
import styles from "./SummerCards.module.css";

export default function SummerCards() {
    return(
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Summer Vacation &#x1F31E;
</h1>
        <p className={styles.summerText}>To ensure you get the most out of the Summer, check out our 2022 Summer Guide.</p>
        <div className={styles.summerBeaches}>
         <h2 className={styles.beachesHead}>Hip, Hip, Hooray for the Hot Summer Day! Explore Beaches.</h2>
        <div className={styles.arrangingCards}>
          <Summercard
            desc="Santa Catalina is only an hour's drive from Long Beach, but once you get there, it feels like a million miles from the SoCal roads. Try zip-lining over the canyons and eucalyptus trees of the island or sip cocktails in a private cabana at the upscale Descanso Beach Club."
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660853295/Summers/californiaBeach_jndifi.jpg'
            heading='Santa Catalina,California'
          />
          <Summercard
            desc="Wasaga Beach, one of Ontario's great beach communities, attracts nearly two million surfers and sunbathers from all over the country. You can come here to see and be seen. A regular stream of sun-kissed people enjoy themselves while taking pictures and strolling along the water edge. Numerous families with their kids have returned from this show and are currently splashing in the warm, shallow waters."
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660853551/Summers/WasagaBeach_m3gszg.jpg'
            heading='Wasaga Beach, ON'
          /><Summercard
          desc="Kodiak Island has a lot of surprises you wouldn't expect to find in Alaska, like a thriving surfing community and an annual rodeo. The second-largest island in the country, Kodiak, is also well renowned for its whale watching, hiking, and a sizable population of coastal brown bears (but don't worry, they're mostly interested in the enormous salmon racing through the isle's waterways)."
          img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660853742/Summers/kodiakIsland_yo1ciu.jpg'
          heading='Kodiak Island, Alaska'
        />
        </div>
          
        </div>
        <div className={styles.summerBeaches}>
         <h2 className={styles.beachesHead}>Summer Dining</h2>
        <div className={styles.arrangingCards}>
          <Summercard
            desc="Afternoon tea, the quintessential British custom, is a wonderful way to pass the time and savour authentic British treats. Make sure you set aside a few hours for yourself to enjoy afternoon tea, which is typically composed of finger sandwiches, scones with jam and cream, pastries, and your choice of tea."
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660854645/Summers/afternoonTeaLondon_tphykj.jpg'
            heading='London'
          />
          <Summercard
            desc="It doesn't get much more idyllic than Los Angeles, California. The city by the sea not only offers amazing scenery and ideal temperatures all year round, but it also consistently has one of the most diversified populations in the country. Along with those stunning individuals, there are some equally unique and mouthwatering delicacies. More than 24,000 restaurants can happily make you a meal in the city."
            img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660854940/Summers/laFood_qqor3h.jpg'
            heading='Los Angeles'
          /><Summercard
          desc="India is a cuisine lover's heaven, offering countless possibilities to sample regional specialties and titillate the palate. Butter chicken is one of the dishes and it is delicious, tender chicken served in a spicy tomato sauce. It is typically prepared in a tandoor, a cylindrical clay or metal oven, but less genuine methods may involve grilling, roasting, or pan-frying."
          img='https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660855063/Summers/indianfood_eddfgo.jpg'
          heading='Indian Food'
        />
        </div>
          
        </div>
      </div>
    </div>
    );
}

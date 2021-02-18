import React from 'react';
import toasting from '../img/toasting.png';
console.log(toasting);

const About = () => {
  return (
    <div>
      <h1 className="about">About Octoberfest</h1>
      <div className="row">
        <div>
          <img className="column" src={toasting} alt="Toasting beer glasses" />
        </div>
        <div>
          <p className="column">
            <h3 className="h3Color">Oktoberfest</h3>
            The Oktoberfest (German pronunciation: [ɔkˈtoːbɐˌfɛst]) is the
            world's largest Volksfest (beer festival and travelling funfair).
            Held annually in Munich, Bavaria, Germany, it is a 16- to 18-day
            folk festival running from mid- or late September to the first
            Sunday in October, with more than six million people from around the
            world attending the event every year. Locally, it is called d’Wiesn,
            after the colloquial name for the fairgrounds, Theresienwiese. The
            Oktoberfest is an important part of Bavarian culture, having been
            held since the year 1810. Other cities across the world also hold
            Oktoberfest celebrations that are modeled after the original Munich
            event. During the event, large quantities of Oktoberfest Beer are
            consumed: during the 16-day festival in 2013, for example, 7.7
            million litres (66,000 US bbl; 1,700,000 imp gal) were served.[1]
            Visitors also enjoy numerous attractions, such as amusement rides,
            sidestalls, and games.
            <a href="https://en.wikipedia.org/wiki/Oktoberfest">Wikipedia</a>
          </p>
        </div>
        <div>
          <p className="column">
            <h3 className="h3Color">History</h3>
            Kronprinz Ludwig (1786–1868), later King Ludwig I (reign:
            1825–1848), married Princess Therese of Saxe-Hildburghausen on 12
            October 1810. The citizens of Munich were invited to attend the
            festivities held on the fields in front of the city gates to
            celebrate the royal event. The fields were named Theresienwiese
            ("Theresa's Meadow") in honour of the Crown Princess, and have kept
            that name ever since, although the locals have since abbreviated the
            name simply to the "Wiesn".[2] Horse races, in the tradition of the
            15th-century Scharlachrennen (Scarlet Race at Karlstor), were held
            on 18 October to honor the newlyweds. It is widely understood that
            Andreas Michael Dall'Armi, a Major in the National Guard, proposed
            the idea. However, the origins of the horse races, and Oktoberfest
            itself, may have stemmed from proposals offered by Franz
            Baumgartner, a coachman and Sergeant in the National Guard.
            <a href="https://en.wikipedia.org/wiki/Oktoberfest">Wikipedia</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

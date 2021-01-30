import React from "react";
import Typewriter from "typewriter-effect";
const Anime = () => {
	return (
		<Typewriter
		onInit={(typewriter) => {
			typewriter.typeString('')
			  .callFunction(() => {
				console.log('String typed out!');
			  })
			  .pauseFor(10)
			  .deleteAll()
			  .callFunction(() => {
				console.log('All strings were deleted');
			  })
			  .start();
		  }}
				options={{
					  strings: ['Illustrator.', 'Visual Designer.'],
					  autoStart: true,
					  cursor:"",
					  delay:5,
					  loop: true,
					}}
			/>
		);
	};

export default Anime;
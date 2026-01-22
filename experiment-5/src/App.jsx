import { lazy, Suspense, useState } from 'react';

const User = lazy(() => import('./User'));
const Image = lazy(() => import('./Image'));
const Text = lazy(() => import('./Text'));

function App() {
  const [loadUser, setLoadUser] = useState(false);
  const [loadImage, setLoadImage] = useState(false);
  const [loadText, setLoadText] = useState(false);

  return (
    <div>
      <h1>Lazy Loading</h1>

      <button onClick={() => setLoadUser(true)}>
        Load User
      </button>
      
      <button onClick={() => setLoadImage(true)}>
        Load Image
      </button>
      
      <button onClick={() => setLoadText(true)}>
        Load Text
      </button>

      {loadUser && (
        <Suspense fallback={<h3>Loading User...</h3>}>
          <User />
        </Suspense>
      )}
      
      {loadImage && (
        <Suspense fallback={<h3>Loading Image...</h3>}>
          <Image />
        </Suspense>
      )}
      
      {loadText && (
        <Suspense fallback={<h3>Loading Text...</h3>}>
          <Text />
        </Suspense>
      )}
    </div>
  );
}

export default App;



// function LazyImage() {
//   return (
//     <img 
//       src="https://picsum.photos/300/200" 
//       loading="lazy"
//       alt="Lazy loaded image"
//     />
//   );
// }


// import { useEffect, useRef, useState } from 'react';

// function LazyImage({ src, alt }) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const imgRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsLoaded(true);
//         observer.disconnect();
//       }
//     });

//     if (imgRef.current) observer.observe(imgRef.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div ref={imgRef}>
//       {isLoaded ? (
//         <img src={src} alt={alt} />
//       ) : (
//         <div style={{ width: '300px', height: '200px', background: '#f0f0f0' }}>
//           Loading...
//         </div>
//       )}
//     </div>
//   );
// }



//const Spline = dynamic(() => import('@splinetool/react-spline').then(mod => mod.default), {
//  ssr: false,
//});
import Spline from '@splinetool/react-spline/next';

import '../app.css';
export default function HeroModel() {
  
  return (
    <div>
      <Spline className="model"
        scene="https://prod.spline.design/xGBBKsEMeyKcN8gb/scene.splinecode"
      />
    </div>
  );
}

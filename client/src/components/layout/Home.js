import React from 'react'
import { Button} from 'reactstrap';
import CarouselHome from './CarouselHome';
import '../style/Home.css'
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="second">
          <CarouselHome />
         <div className="second">
           <h2 className="who"> Who We Are</h2>
         <h2> Who we are
              Welcome to Physio Therapy
              & Chiroparctor Clinic
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
               sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipiscil. sed quia non numquam qui ratione voluptatem sequi nesciunt. Neque porro quisquam</h2>
               <Button  color="primary">our services</Button>
        </div>
        </div>

      </div>
    )
  }
}

export default Home

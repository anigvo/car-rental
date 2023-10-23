import { AiFillCheckCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiMapAlt, BiMoney, BiMap } from 'react-icons/bi';
import {
  BsFillCarFrontFill,
  BsFillClockFill,
  BsFillFuelPumpFill,
} from 'react-icons/bs';
import { HiClipboardDocumentList } from "react-icons/hi2";
import { GiKeyCard } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import CarImg from '../../assets/images/car1.png';
import CarImg2 from '../../assets/images/car2.png';
import CarImg3 from '../../assets/images/car3.png';
import {
  HomeWrap,
  HomeTitle,
  HomeTitleSecondary,
  HomeContentWrap,
  HomeContent,
  HomeList,
  HomeItem,
  HomeLink,
  HomeImg,
  HomeIcon,
} from './Home.styled';

const Home = () => {
  return (
    <HomeWrap>
      <HomeTitle>Daily car rental in Ukraine</HomeTitle>
      <HomeTitleSecondary>
        Kyiv, Kharkiv, Odesa, Dnipro, Lviv
      </HomeTitleSecondary>
      <HomeContentWrap>
        <HomeContent>
          <HomeList>
            <HomeItem>
              <HomeIcon>
                <AiFillCheckCircle />
              </HomeIcon>
              Full insurance (hull insurance, MTPL)
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <AiFillCheckCircle />
              </HomeIcon>
              Car delivery to the address
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <AiFillCheckCircle />
              </HomeIcon>
              Car transfer takes up to 10 minutes
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <AiFillCheckCircle />
              </HomeIcon>
              It is possible to travel abroad
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <AiFillCheckCircle />
              </HomeIcon>
              Round-the-clock support 24/7
            </HomeItem>
          </HomeList>
          <HomeLink to="/catalog">View the car catalog</HomeLink>
        </HomeContent>
        <HomeImg src={CarImg} alt="Car" />
      </HomeContentWrap>

      <HomeTitle>Rental Terms</HomeTitle>
      <HomeContentWrap>
        <HomeImg src={CarImg2} alt="Car" />
        <HomeList>
          <HomeItem>
            <HomeIcon>
              <CgProfile />
            </HomeIcon>
            Age from 21 years old
          </HomeItem>
          <HomeItem>
            <HomeIcon>
              <BiMapAlt />
            </HomeIcon>
            The territory of using the car is Ukraine. It is possible to travel
            abroad
          </HomeItem>
          <HomeItem>
            <HomeIcon>
              <BsFillCarFrontFill />
            </HomeIcon>
            Driving experience from 2 years
          </HomeItem>
          <HomeItem>
            <HomeIcon>
              <BiMoney />
            </HomeIcon>
            The deposit for the period of use depends on the car class. The
            amount is from 7000 UAH
          </HomeItem>
          <HomeItem>
            <HomeIcon>
              <BsFillClockFill />
            </HomeIcon>
            Minimum rental period - 1 day
          </HomeItem>
        </HomeList>
      </HomeContentWrap>

      <HomeTitle>You get</HomeTitle>
      <HomeContentWrap>
        <HomeContent>
          <HomeList>
            <HomeItem>
              <HomeIcon>
                <HiClipboardDocumentList />
              </HomeIcon>
              Cars are fully insured
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <GiKeyCard />
              </HomeIcon>
              We deliver the car to the address within an hour
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <BsFillFuelPumpFill />
              </HomeIcon>
              Delivery of the car in a clean form and with a full tank
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <MdSupportAgent />
              </HomeIcon>
              Round-the-clock online support
            </HomeItem>
            <HomeItem>
              <HomeIcon>
                <BiMap />
              </HomeIcon>
              Help on the road
            </HomeItem>
          </HomeList>
        </HomeContent>
        <HomeImg src={CarImg3} alt="Car" />
      </HomeContentWrap>
    </HomeWrap>
  );
};

export default Home;

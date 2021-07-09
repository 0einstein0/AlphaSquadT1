import React, { Component } from 'react';
import HText from '../components/HText';
import WebButton from '../components/WebButton';
import Header from '../components/Header';
import Features from '../components/Features';
import Grad from '../components/Grad';
import Cards from '../components/Cards';


class Homepage extends Component {
  render() {
    return (
      <div>
      <div class="  bg-blue-10 h-xxl">
      <div class="  items-center  px-16 py-7  ">
<Header></Header>
<div class="grid grid-flow-row " >
<HText classs =" mb-16 font-extrabold text-center text-7xl leading-normal" >DEPLOY YOUR <br/>FRONT-END</HText> 
<div class="   w-1/3 place-self-center grid grid-flow-col ">
<WebButton class=" rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">Get started</WebButton>
<WebButton class=" rounded-sm  bg-cyan-100 text-cyan-800" >Learn more</WebButton>
</div>
</div>
</div>
</div>
<div class="-mt-28 items-center  px-16 py-7 " >
<div class="h-xxl" >
<div class="  h-60 place-items-center grid grid-flow-col bg-gradient-to-b from-blue-100 via-blue-100 to-blue-200">
<div class="mt-24 w-3/4 h-xl bg-gray-200 rounded-xl shadow-xl " >
<div class= " m-2 place-items-center grid grid-flow-col w-1/3">
  <div class=" m-2 rounded-full h-4 w-4 bg-gray-300 "></div>
  <div class=" m-2 rounded-full h-4 w-4 bg-gray-300 "></div>
  <div class=" m-2 mr-28 rounded-full h-4 w-4 bg-gray-300 "></div>
  <div class="m-2 place-self-center w-96  h-6 rounded-md bg-white " ></div>
</div>
<div class="mt-2 m-2  h-lg bg-white " ></div>
</div>
</div>
</div> 


<div class=" mt-28 grid grid-flow-row  h-96" >
<HText classs =" font-extrabold place-self-center text-5xl mt-16 mb-20 leading-normal" >Tailor-made features</HText> 
<div class="grid grid-flow-column grid-cols-3">
<Features heading="Robust workflow" >
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#A5F3FC"/>
<path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#22D3EE"/>
<path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#0EA5E9"/>
</svg>

</Features>
<Features heading="Flexibility" ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.33333 1.33337H30.6667L26.6667 9.33337H1.33333L5.33333 1.33337Z" fill="#22D3EE"/>
<path d="M5.33333 12H30.6667L26.6667 20H1.33333L5.33333 12Z" fill="#0EA5E9"/>
<path d="M5.33333 22.6667H30.6667L26.6667 30.6667H1.33333L5.33333 22.6667Z" fill="#A5F3FC"/>
</svg>
</Features>
<Features heading="User friendly" ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.6667 8.00004V2.66671C30.6667 2.31309 30.5262 1.97395 30.2762 1.7239C30.0261 1.47385 29.687 1.33337 29.3333 1.33337H2.66668C2.31305 1.33337 1.97392 1.47385 1.72387 1.7239C1.47382 1.97395 1.33334 2.31309 1.33334 2.66671V8.00004H30.6667Z" fill="#0EA5E9"/>
<path d="M1.33334 10.6667V29.3334C1.33334 29.687 1.47382 30.0262 1.72387 30.2762C1.97392 30.5263 2.31305 30.6667 2.66668 30.6667H9.33334V10.6667H1.33334Z" fill="#A5F3FC"/>
<path d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z" fill="#22D3EE"/>
</svg>
</Features>
<Features heading="Multiple layouts" >
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 32H16C15.6464 32 15.3072 31.8595 15.0572 31.6095C14.8071 31.3594 14.6667 31.0203 14.6667 30.6667V28C14.6667 27.6464 14.8071 27.3073 15.0572 27.0572C15.3072 26.8072 15.6464 26.6667 16 26.6667H28C28.3536 26.6667 28.6928 26.8072 28.9428 27.0572C29.1928 27.3073 29.3333 27.6464 29.3333 28V30.6667C29.3333 31.0203 29.1928 31.3594 28.9428 31.6095C28.6928 31.8595 28.3536 32 28 32Z" fill="#A5F3FC"/>
<path d="M28 0H3.99999C3.64637 0 3.30723 0.140475 3.05718 0.390523C2.80713 0.640572 2.66666 0.979711 2.66666 1.33333V4C2.66666 4.35362 2.80713 4.69276 3.05718 4.94281C3.30723 5.19286 3.64637 5.33333 3.99999 5.33333H28C28.3536 5.33333 28.6928 5.19286 28.9428 4.94281C29.1929 4.69276 29.3333 4.35362 29.3333 4V1.33333C29.3333 0.979711 29.1929 0.640572 28.9428 0.390523C28.6928 0.140475 28.3536 0 28 0Z" fill="#0EA5E9"/>
<path d="M28 8H3.99999C3.64637 8 3.30723 8.14047 3.05718 8.39052C2.80713 8.64057 2.66666 8.97971 2.66666 9.33333V22.6667C2.66666 23.0203 2.80713 23.3594 3.05718 23.6095C3.30723 23.8595 3.64637 24 3.99999 24H28C28.3536 24 28.6928 23.8595 28.9428 23.6095C29.1929 23.3594 29.3333 23.0203 29.3333 22.6667V9.33333C29.3333 8.97971 29.1929 8.64057 28.9428 8.39052C28.6928 8.14047 28.3536 8 28 8Z" fill="#22D3EE"/>
</svg>
</Features>
<Features heading="Better components" ><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.66667 1.33331H2.66667C2.31304 1.33331 1.9739 1.47379 1.72386 1.72384C1.47381 1.97388 1.33333 2.31302 1.33333 2.66665V29.3333C1.33333 29.6869 1.47381 30.0261 1.72386 30.2761C1.9739 30.5262 2.31304 30.6666 2.66667 30.6666H6.66667V1.33331Z" fill="#A5F3FC"/>
<path d="M9.33333 30.6666H22.6667V1.33331H9.33333V30.6666ZM16 25.3333C15.6464 25.3333 15.3072 25.1928 15.0572 24.9428C14.8071 24.6927 14.6667 24.3536 14.6667 24C14.6667 23.6464 14.8071 23.3072 15.0572 23.0572C15.3072 22.8071 15.6464 22.6666 16 22.6666C16.3536 22.6666 16.6928 22.8071 16.9428 23.0572C17.1929 23.3072 17.3333 23.6464 17.3333 24C17.3333 24.3536 17.1929 24.6927 16.9428 24.9428C16.6928 25.1928 16.3536 25.3333 16 25.3333ZM16 6.66665C16.3536 6.66665 16.6928 6.80712 16.9428 7.05717C17.1929 7.30722 17.3333 7.64636 17.3333 7.99998C17.3333 8.3536 17.1929 8.69274 16.9428 8.94279C16.6928 9.19284 16.3536 9.33331 16 9.33331C15.6464 9.33331 15.3072 9.19284 15.0572 8.94279C14.8071 8.69274 14.6667 8.3536 14.6667 7.99998C14.6667 7.64636 14.8071 7.30722 15.0572 7.05717C15.3072 6.80712 15.6464 6.66665 16 6.66665ZM16 14.6666C16.3536 14.6666 16.6928 14.8071 16.9428 15.0572C17.1929 15.3072 17.3333 15.6464 17.3333 16C17.3333 16.3536 17.1929 16.6927 16.9428 16.9428C16.6928 17.1928 16.3536 17.3333 16 17.3333C15.6464 17.3333 15.3072 17.1928 15.0572 16.9428C14.8071 16.6927 14.6667 16.3536 14.6667 16C14.6667 15.6464 14.8071 15.3072 15.0572 15.0572C15.3072 14.8071 15.6464 14.6666 16 14.6666Z" fill="#22D3EE"/>
<path d="M29.3333 1.33331H25.3333V30.6666H29.3333C29.687 30.6666 30.0261 30.5262 30.2761 30.2761C30.5262 30.0261 30.6667 29.6869 30.6667 29.3333V2.66665C30.6667 2.31302 30.5262 1.97388 30.2761 1.72384C30.0261 1.47379 29.687 1.33331 29.3333 1.33331Z" fill="#0EA5E9"/>
</svg>
</Features>
<Features heading="Well organized" >
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.208 0.175992L0.781342 6.91599C0.683781 6.96073 0.601133 7.03256 0.543236 7.12294C0.485339 7.21331 0.454633 7.31842 0.454773 7.42575C0.454914 7.53308 0.485894 7.63811 0.544027 7.72833C0.602161 7.81856 0.684997 7.89017 0.782675 7.93466L15.3227 14.6253C15.752 14.8227 16.248 14.8227 16.6773 14.6253L31.2173 7.93466C31.3151 7.8903 31.398 7.81879 31.4563 7.72865C31.5145 7.6385 31.5456 7.53351 31.5459 7.42618C31.5462 7.31885 31.5156 7.2137 31.4578 7.12325C31.4001 7.0328 31.3175 6.96086 31.22 6.91599L16.792 0.175992C16.5441 0.0601174 16.2737 6.10352e-05 16 6.10352e-05C15.7263 6.10352e-05 15.456 0.0601174 15.208 0.175992Z" fill="#22D3EE"/>
<path d="M31.22 15.568L28.24 14.176C28.0266 14.0763 27.794 14.0243 27.5584 14.0236C27.3229 14.0229 27.09 14.0735 26.876 14.172L16.6773 18.8653C16.4649 18.963 16.2338 19.0136 16 19.0136C15.7662 19.0136 15.5351 18.963 15.3227 18.8653L5.12267 14.172C4.90885 14.0737 4.67621 14.0232 4.4409 14.0239C4.20559 14.0246 3.97324 14.0765 3.76001 14.176L0.780006 15.568C0.682503 15.6128 0.599949 15.6848 0.54217 15.7752C0.48439 15.8657 0.453823 15.9708 0.454103 16.0782C0.454384 16.1855 0.485502 16.2905 0.543754 16.3806C0.602006 16.4708 0.684937 16.5423 0.782674 16.5866L15.3227 23.276C15.535 23.3742 15.7661 23.4251 16 23.4251C16.2339 23.4251 16.465 23.3742 16.6773 23.276L31.2173 16.5866C31.3151 16.5423 31.398 16.4708 31.4563 16.3806C31.5145 16.2905 31.5456 16.1855 31.5459 16.0782C31.5462 15.9708 31.5156 15.8657 31.4578 15.7752C31.4001 15.6848 31.3175 15.6128 31.22 15.568Z" fill="#A5F3FC"/>
<path d="M31.22 24.144L28.24 22.752C28.0266 22.6522 27.794 22.6002 27.5585 22.5995C27.3229 22.5989 27.09 22.6495 26.876 22.748L16.6774 27.44C16.4649 27.5376 16.2338 27.5882 16 27.5882C15.7662 27.5882 15.5351 27.5376 15.3227 27.44L5.12269 22.7466C4.90887 22.6484 4.67623 22.5978 4.44091 22.5985C4.2056 22.5992 3.97326 22.6511 3.76002 22.7506L0.780019 24.144C0.682891 24.189 0.600708 24.2609 0.543205 24.3512C0.485701 24.4415 0.455288 24.5464 0.455568 24.6535C0.455849 24.7605 0.486813 24.8653 0.544789 24.9553C0.602765 25.0453 0.685324 25.1168 0.782686 25.1613L15.3227 31.852C15.752 32.0493 16.248 32.0493 16.6774 31.852L31.2174 25.1613C31.3147 25.1168 31.3973 25.0453 31.4553 24.9553C31.5132 24.8653 31.5442 24.7605 31.5445 24.6535C31.5448 24.5464 31.5143 24.4415 31.4568 24.3512C31.3993 24.2609 31.3172 24.189 31.22 24.144Z" fill="#0EA5E9"/>
</svg>
</Features>
</div>
</div>
<div class="clear-both " >
<div class="mt-28 -mb-20  place-content-center grid grid-flow-row  h-96" >
<HText classs =" font-extrabold place-self-center text-5xl " >How it works</HText> 
</div>


<div class=" mt-36 float-left w-5/12">
  <HText classs =" font-bold  text-4xl "  >Sign Up</HText>
  <p class="mt-6 mb-6 text-md" >
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat vitae a consectetur dolor. Elementum habitant urna, ac quis laoreet urna purus. Aliquam at est vel auctor rhoncus et. Sit ac enim, malesuada mattis. Dignissim nibh augue posuer
  </p>
  <WebButton class=" mt-4 float-left rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">Learn more</WebButton>
  <svg class="mt-2   float-right" width="90" height="60" viewBox="0 0 107 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="76.5" cy="30" rx="30.5" ry="30" fill="#0891B2"/>
<path d="M87.8839 30.8839C88.372 30.3957 88.372 29.6043 87.8839 29.1161L79.9289 21.1612C79.4408 20.673 78.6493 20.673 78.1612 21.1612C77.673 21.6493 77.673 22.4408 78.1612 22.9289L85.2322 30L78.1612 37.0711C77.673 37.5592 77.673 38.3507 78.1612 38.8388C78.6493 39.327 79.4408 39.327 79.9289 38.8388L87.8839 30.8839ZM66 31.25L87 31.25L87 28.75L66 28.75L66 31.25Z" fill="white"/>
<path d="M0.292893 30.2929C-0.0976314 30.6834 -0.0976315 31.3166 0.292892 31.7071L6.65685 38.0711C7.04738 38.4616 7.68054 38.4616 8.07107 38.0711C8.46159 37.6805 8.46159 37.0474 8.07107 36.6569L2.41421 31L8.07107 25.3431C8.46159 24.9526 8.46159 24.3195 8.07107 23.9289C7.68054 23.5384 7.04738 23.5384 6.65686 23.9289L0.292893 30.2929ZM22 30L1 30L1 32L22 32L22 30Z" fill="#1F2937"/>
</svg>
</div>
<div class="float-right mb-20  ">
<svg  width="400" height="530" viewBox="0 0 400 530" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M223.405 503.693L262.19 490.909L299.695 503.693L332.512 490.909L363.625 503.693L398.999 490.909" stroke="#0EA5E9"/>
<path d="M223.405 516.477L262.189 503.693L299.695 516.477L332.512 503.693L363.625 516.477L398.999 503.693" stroke="#0EA5E9"/>
<path d="M223.405 529.261L262.189 516.477L299.695 529.261L332.512 516.477L363.625 529.261L398.999 516.477" stroke="#0EA5E9"/>
<rect x="117.84" y="59.6591" width="242.786" height="413.352" fill="url(#paint0_linear)"/>
<path d="M335.071 59.6591L360.252 81.0782M276.442 59.6591C323.043 108.886 339.205 115.649 360.252 132.184M215.932 59.6591C264.614 117.561 295.945 145.114 360.252 184.04M156.551 59.6591C212.174 155.857 291.85 199.447 360.252 244.916M118.592 59.6591C168.753 177.874 217.292 234.966 360.252 311.428M49.439 59.6591C53.6437 96.8612 187.271 346.886 360.252 384.704M360.252 443.701C185.341 411.566 120.046 313.78 4.3394 191.932" stroke="#FAFAFA" stroke-width="2"/>
<rect x="17.8107" y="15.6204" width="225.294" height="487.836" rx="40" fill="#1E1E1E"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="17" y="15" width="227" height="489">
<rect x="17.8107" y="15.6204" width="225.294" height="487.836" rx="40" fill="white"/>
</mask>
<g mask="url(#mask0)">
</g>
<g clip-path="url(#clip0)">
<rect x="17.8107" y="15.6204" width="225.294" height="487.836" fill="#2C2D37"/>
<rect opacity="0.14" x="63.8107" y="489.62" width="134" height="5" rx="2.5" fill="white"/>
<rect x="17.0729" y="15.2925" width="266" height="573" fill="white"/>
</g>
<path opacity="0.02" fill-rule="evenodd" clip-rule="evenodd" d="M17.8107 15.6204H243.105L50.8538 503.457H17.8107V15.6204Z" fill="url(#paint1_linear)"/>
<g filter="url(#filter0_iiii)">
<path d="M258.124 119.556C259.12 119.556 259.927 120.363 259.927 121.358V177.832C259.927 178.827 259.12 179.634 258.124 179.634V119.556Z" fill="url(#paint2_linear)"/>
</g>
<g filter="url(#filter1_iiii)">
<path d="M0.98877 156.804C0.98877 155.809 1.79571 155.002 2.79112 155.002V192.251C1.79571 192.251 0.98877 191.444 0.98877 190.448V156.804Z" fill="url(#paint3_linear)"/>
</g>
<g filter="url(#filter2_iiii)">
<path d="M0.98877 109.343C0.98877 108.347 1.79571 107.54 2.79112 107.54V144.789C1.79571 144.789 0.98877 143.982 0.98877 142.986V109.343Z" fill="url(#paint4_linear)"/>
</g>
<g filter="url(#filter3_iiii)">
<path d="M0.989517 72.094C0.989517 71.0986 1.79646 70.2917 2.79187 70.2917V90.1175C1.79646 90.1175 0.989517 89.3106 0.989517 88.3152V72.094Z" fill="url(#paint5_linear)"/>
</g>
<g filter="url(#filter4_iiii)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.19046 72C2.19046 46.7976 2.19046 34.1965 7.09517 24.5704C11.4095 16.1031 18.2936 9.21901 26.7609 4.90471C36.3869 0 48.9881 0 74.1905 0H186.725C211.927 0 224.529 0 234.155 4.90471C242.622 9.21901 249.506 16.1031 253.82 24.5704C258.725 34.1965 258.725 46.7976 258.725 72V447.077C258.725 472.279 258.725 484.881 253.82 494.507C249.506 502.974 242.622 509.858 234.155 514.172C224.529 519.077 211.927 519.077 186.725 519.077H74.1905C48.9881 519.077 36.3869 519.077 26.7609 514.172C18.2936 509.858 11.4095 502.974 7.09517 494.507C2.19046 484.881 2.19046 472.279 2.19046 447.077V72ZM17.811 55.6204C17.811 41.6191 17.811 34.6184 20.5358 29.2706C22.9327 24.5666 26.7572 20.7421 31.4612 18.3452C36.809 15.6204 43.8097 15.6204 57.811 15.6204H64.0995C66.0771 15.6359 67.6754 17.2438 67.6754 19.225V15.6843C67.71 25.609 75.7661 33.6438 85.6989 33.6438H175.216C185.143 33.6438 193.197 25.6168 193.239 15.6989V19.225C193.239 17.2445 194.836 15.637 196.813 15.6204H203.105C217.106 15.6204 224.107 15.6204 229.455 18.3452C234.159 20.7421 237.983 24.5666 240.38 29.2706C243.105 34.6184 243.105 41.6191 243.105 55.6204V463.457C243.105 477.458 243.105 484.459 240.38 489.806C237.983 494.51 234.159 498.335 229.455 500.732C224.107 503.457 217.106 503.457 203.105 503.457H57.811C43.8097 503.457 36.809 503.457 31.4612 500.732C26.7572 498.335 22.9327 494.51 20.5358 489.806C17.811 484.459 17.811 477.458 17.811 463.457V55.6204Z" fill="url(#paint6_linear)"/>
</g>
<rect x="254.52" y="466.208" width="4.20549" height="3.6047" fill="url(#paint7_linear)"/>
<rect x="254.52" y="49.8649" width="4.20549" height="3.6047" fill="url(#paint8_linear)"/>
<rect x="2.19023" y="466.208" width="4.20549" height="3.6047" fill="url(#paint9_linear)"/>
<rect x="2.19052" y="49.865" width="4.20549" height="3.6047" fill="url(#paint10_linear)"/>
<circle cx="158.094" cy="20.7271" r="3.90509" fill="#0891B2"/>
<g filter="url(#filter5_i)">
<circle cx="158.094" cy="20.7271" r="2.10274" fill="#27476D"/>
</g>
<rect x="114.536" y="18.6243" width="31.8415" height="4.20549" fill="#0891B2"/>
<defs>
<filter id="filter0_iiii" x="257.124" y="118.556" width="3.80235" height="62.0784" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
</filter>
<filter id="filter1_iiii" x="-0.0112305" y="154.002" width="3.80235" height="39.2486" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
</filter>
<filter id="filter2_iiii" x="-0.0112305" y="106.54" width="3.80235" height="39.2486" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
</filter>
<filter id="filter3_iiii" x="-0.0104828" y="69.2917" width="3.80235" height="21.8259" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
</filter>
<filter id="filter4_iiii" x="1.19046" y="-1" width="258.535" height="521.077" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect2_innerShadow" result="effect3_innerShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1"/>
<feGaussianBlur stdDeviation="2.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"/>
<feBlend mode="normal" in2="effect3_innerShadow" result="effect4_innerShadow"/>
</filter>
<filter id="filter5_i" x="155.991" y="18.6244" width="4.20549" height="5.20549" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
<feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
</filter>
<linearGradient id="paint0_linear" x1="360.626" y1="473.011" x2="143.205" y2="397.434" gradientUnits="userSpaceOnUse">
<stop stop-color="#06B6D4"/>
<stop offset="0.0001" stop-color="#0E7490"/>
<stop offset="1" stop-color="#0284C7"/>
</linearGradient>
<linearGradient id="paint1_linear" x1="243.105" y1="503.457" x2="243.105" y2="15.6204" gradientUnits="userSpaceOnUse">
<stop/>
<stop offset="1" stop-color="white"/>
</linearGradient>
<linearGradient id="paint2_linear" x1="259.927" y1="119.556" x2="258.124" y2="119.556" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.5" stop-color="#FAFAFA"/>
<stop offset="1" stop-color="#F5F5F5"/>
</linearGradient>
<linearGradient id="paint3_linear" x1="2.79112" y1="155.002" x2="0.98877" y2="155.002" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.5" stop-color="#FAFAFA"/>
<stop offset="1" stop-color="#F5F5F5"/>
</linearGradient>
<linearGradient id="paint4_linear" x1="2.79112" y1="107.54" x2="0.98877" y2="107.54" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.5" stop-color="#FAFAFA"/>
<stop offset="1" stop-color="#F5F5F5"/>
</linearGradient>
<linearGradient id="paint5_linear" x1="2.79187" y1="70.2917" x2="0.989517" y2="70.2917" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.5" stop-color="#FAFAFA"/>
<stop offset="1" stop-color="#F5F5F5"/>
</linearGradient>
<linearGradient id="paint6_linear" x1="258.725" y1="0" x2="2.19046" y2="0" gradientUnits="userSpaceOnUse">
<stop stop-color="#F5F5F5"/>
<stop offset="0.5" stop-color="#FAFAFA"/>
<stop offset="1" stop-color="#F5F5F5"/>
</linearGradient>
<linearGradient id="paint7_linear" x1="254.52" y1="469.813" x2="258.726" y2="469.813" gradientUnits="userSpaceOnUse">
<stop stop-color="#D7D7D7"/>
<stop offset="1" stop-color="#787878"/>
</linearGradient>
<linearGradient id="paint8_linear" x1="254.52" y1="53.4696" x2="258.726" y2="53.4696" gradientUnits="userSpaceOnUse">
<stop stop-color="#D7D7D7"/>
<stop offset="1" stop-color="#787878"/>
</linearGradient>
<linearGradient id="paint9_linear" x1="2.19023" y1="469.813" x2="6.39572" y2="469.813" gradientUnits="userSpaceOnUse">
<stop stop-color="#787878"/>
<stop offset="1" stop-color="#D7D7D7"/>
</linearGradient>
<linearGradient id="paint10_linear" x1="2.19052" y1="53.4697" x2="6.39601" y2="53.4697" gradientUnits="userSpaceOnUse">
<stop stop-color="#787878"/>
<stop offset="1" stop-color="#D7D7D7"/>
</linearGradient>
<clipPath id="clip0">
<rect width="225.294" height="487.836" fill="white" transform="translate(17.8107 15.6204)"/>
</clipPath>
</defs>
</svg>
</div>

</div>
</div>
<div class="mt-20  place-content-center ">
<Grad>
  <div class="mt-16 ml-10 w-9/12 p-14 text-white block" >
  <img class="float-left  w-16 h-16 rounded-full " src="https://i.postimg.cc/wvbDdP1N/Picture.png" alt="user image" /> 
  <h2 class=" float-right font-semibold" >Jenny Wilson</h2>
  <h3 class="float-right" >Vice President</h3>
  </div>
  <div class="  w-11/12">
  <svg class="mt-6 mb-8 float-left" width="50" height="98" viewBox="0 0 50 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.264 34.6001V46.1921H11.528V38.7041C11.528 35.9201 12.032 33.4001 13.04 31.1441C14.048 28.8881 15.728 26.5601 18.08 24.1601L22.328 27.5441C19.928 29.9921 18.464 32.3441 17.936 34.6001H23.264ZM38.312 34.6001V46.1921H26.576V38.7041C26.576 35.9201 27.08 33.4001 28.088 31.1441C29.096 28.8881 30.776 26.5601 33.128 24.1601L37.376 27.5441C34.976 29.9921 33.512 32.3441 32.984 34.6001H38.312Z" fill="white"/>
</svg>
  <p class="mt-20 text-md text-white"> Eos enim quo est necessitatibus nobis consectetur rerum qui dolores. Quia commodi similique est sed aut. Aspernatur voluptas nisi tenetur voluptates iusto debitis ex voluptatem odit. Repudiandae et et quod et. Enim sit delectus numquam. Molestiae aut voluptatem. Quia commodi similique est sed aut. Aspernatur voluptas nisi tenetur voluptates iusto debitis.</p>
  </div>
</Grad>

</div>
<div class="mt-24 -mb-20  place-content-center grid grid-flow-row  h-96">
<HText classs =" font-extrabold place-self-center text-5xl mb-10 " >Brands using our services</HText> 
<div class="mb-10">
<svg width="746" height="230" viewBox="0 0 746 230" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dd)">
<rect x="193" y="2" width="170" height="96" fill="white"/>
</g>
<path d="M305.064 64.64C313.042 64.64 319.534 58.0432 319.534 49.936C319.534 41.824 313.042 35.232 305.064 35.232C297.084 35.232 290.594 41.824 290.594 49.936C290.594 58.0432 297.084 64.64 305.064 64.64ZM305.064 44.6928C307.907 44.6928 310.223 47.0448 310.223 49.9344C310.223 52.824 307.906 55.1728 305.062 55.1728C302.217 55.1728 299.905 52.824 299.905 49.9328C299.905 47.04 302.219 44.6896 305.062 44.6896L305.064 44.6928ZM250.47 64.64C258.449 64.64 264.94 58.0432 264.94 49.936C264.94 41.824 258.449 35.232 250.47 35.232C242.493 35.232 236 41.824 236 49.936C236 58.0432 242.493 64.64 250.47 64.64ZM250.47 44.6928C253.315 44.6928 255.629 47.0448 255.629 49.9344C255.629 52.824 253.315 55.1728 250.47 55.1728C247.627 55.1728 245.314 52.824 245.314 49.9328C245.314 47.04 247.628 44.6896 250.47 44.6896V44.6928ZM277.759 44.3616L273.317 35.424H262.915L272.63 54.976V64.1808H282.889V54.976L292.605 35.424H282.198L277.761 44.3616H277.759Z" fill="#EE2E24"/>
<g filter="url(#filter1_dd)">
<rect x="383" y="130" width="170" height="96" fill="white"/>
</g>
<g clip-path="url(#clip0)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M480.899 187.025C474.914 191.573 466.238 194 458.768 194C448.295 194 438.866 190.006 431.733 183.364C431.172 182.842 431.675 182.13 432.347 182.537C440.045 187.154 449.564 189.932 459.396 189.932C466.027 189.932 473.322 188.518 480.029 185.583C481.043 185.139 481.89 186.267 480.899 187.025Z" fill="#FF9900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M483.388 184.09C482.626 183.082 478.33 183.614 476.402 183.85C475.815 183.923 475.725 183.397 476.255 183.018C479.675 180.535 485.289 181.252 485.943 182.084C486.598 182.92 485.773 188.721 482.558 191.49C482.065 191.915 481.594 191.689 481.814 191.125C482.536 189.267 484.154 185.102 483.388 184.09Z" fill="#FF9900"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M476.537 165.494V163.082C476.537 162.716 476.806 162.471 477.129 162.471H487.607C487.943 162.471 488.212 162.721 488.212 163.082V165.148C488.207 165.494 487.925 165.947 487.423 166.664L481.993 174.656C484.011 174.605 486.141 174.915 487.97 175.978C488.382 176.218 488.494 176.569 488.526 176.916V179.491C488.526 179.842 488.149 180.253 487.755 180.041C484.531 178.298 480.249 178.109 476.685 180.059C476.322 180.263 475.941 179.856 475.941 179.505V177.059C475.941 176.666 475.945 175.996 476.326 175.4L482.617 166.1H477.142C476.806 166.1 476.537 165.855 476.537 165.494Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M438.315 180.549H435.127C434.822 180.526 434.58 180.29 434.557 179.99V163.123C434.557 162.786 434.831 162.518 435.172 162.518H438.144C438.454 162.532 438.7 162.777 438.723 163.082V165.286H438.781C439.557 163.156 441.014 162.162 442.978 162.162C444.973 162.162 446.219 163.156 447.116 165.286C447.887 163.156 449.64 162.162 451.519 162.162C452.855 162.162 454.316 162.73 455.209 164.006C456.217 165.425 456.011 167.487 456.011 169.294L456.007 179.939C456.007 180.276 455.733 180.549 455.392 180.549H452.209C451.891 180.526 451.635 180.263 451.635 179.939V171C451.635 170.288 451.698 168.513 451.546 167.838C451.308 166.705 450.595 166.386 449.671 166.386C448.9 166.386 448.093 166.918 447.766 167.769C447.439 168.619 447.47 170.043 447.47 171V179.939C447.47 180.276 447.197 180.549 446.856 180.549H443.672C443.35 180.526 443.099 180.263 443.099 179.939L443.094 171C443.094 169.118 443.395 166.35 441.13 166.35C438.839 166.35 438.929 169.049 438.929 171V179.939C438.929 180.276 438.655 180.549 438.315 180.549" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M497.233 162.162C501.963 162.162 504.523 166.35 504.523 171.674C504.523 176.819 501.694 180.9 497.233 180.9C492.588 180.9 490.059 176.713 490.059 171.494C490.059 166.243 492.619 162.162 497.233 162.162ZM497.259 165.605C494.91 165.605 494.762 168.906 494.762 170.963C494.762 173.024 494.731 177.424 497.233 177.424C499.703 177.424 499.82 173.875 499.82 171.711C499.82 170.288 499.761 168.587 499.344 167.237C498.986 166.063 498.273 165.605 497.259 165.605Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M510.656 180.549H507.482C507.164 180.526 506.908 180.263 506.908 179.939L506.904 163.068C506.931 162.758 507.195 162.518 507.518 162.518H510.473C510.751 162.532 510.979 162.726 511.042 162.989V165.568H511.1C511.992 163.262 513.243 162.162 515.445 162.162C516.875 162.162 518.269 162.693 519.166 164.149C520 165.499 520 167.769 520 169.4V180.018C519.964 180.313 519.7 180.549 519.386 180.549H516.189C515.898 180.526 515.655 180.304 515.624 180.018V170.856C515.624 169.012 515.83 166.313 513.629 166.313C512.853 166.313 512.14 166.849 511.786 167.662C511.338 168.693 511.28 169.719 511.28 170.856V179.939C511.275 180.276 510.997 180.549 510.656 180.549" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M468.184 172.493C468.184 173.773 468.215 174.841 467.588 175.978C467.081 176.902 466.274 177.471 465.382 177.471C464.158 177.471 463.44 176.509 463.44 175.09C463.44 172.289 465.875 171.781 468.184 171.781V172.493ZM471.399 180.503C471.188 180.697 470.883 180.711 470.645 180.582C469.587 179.676 469.395 179.255 468.816 178.391C467.068 180.23 465.826 180.78 463.561 180.78C460.876 180.78 458.791 179.075 458.791 175.659C458.791 172.992 460.19 171.175 462.19 170.288C463.92 169.502 466.337 169.363 468.184 169.146V168.721C468.184 167.94 468.242 167.015 467.794 166.34C467.408 165.735 466.664 165.485 466.005 165.485C464.79 165.485 463.709 166.128 463.445 167.459C463.391 167.755 463.18 168.046 462.889 168.06L459.8 167.718C459.54 167.658 459.248 167.44 459.325 167.029C460.033 163.165 463.422 162 466.453 162C468.005 162 470.031 162.425 471.255 163.636C472.807 165.129 472.659 167.121 472.659 169.289V174.411C472.659 175.95 473.277 176.625 473.86 177.457C474.062 177.753 474.107 178.109 473.847 178.33C473.197 178.89 472.04 179.93 471.403 180.512L471.399 180.503" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M426.393 172.493C426.393 173.773 426.424 174.841 425.797 175.978C425.29 176.902 424.487 177.471 423.591 177.471C422.367 177.471 421.654 176.51 421.654 175.091C421.654 172.289 424.088 171.781 426.393 171.781V172.493ZM429.608 180.503C429.397 180.697 429.092 180.711 428.854 180.582C427.796 179.676 427.608 179.255 427.025 178.391C425.277 180.23 424.039 180.781 421.77 180.781C419.089 180.781 417 179.075 417 175.659C417 172.992 418.403 171.175 420.399 170.288C422.129 169.502 424.546 169.364 426.393 169.146V168.721C426.393 167.94 426.451 167.015 426.007 166.341C425.617 165.735 424.873 165.485 424.218 165.485C423.003 165.485 421.918 166.128 421.654 167.459C421.6 167.755 421.389 168.046 421.102 168.06L418.009 167.718C417.749 167.658 417.462 167.441 417.534 167.029C418.246 163.165 421.631 162 424.662 162C426.214 162 428.24 162.425 429.464 163.637C431.015 165.13 430.868 167.122 430.868 169.29V174.411C430.868 175.95 431.486 176.625 432.069 177.457C432.275 177.753 432.32 178.109 432.06 178.331C431.41 178.89 430.253 179.93 429.617 180.512L429.608 180.503" fill="black"/>
</g>
<g filter="url(#filter2_dd)">
<rect x="573" y="130" width="170" height="96" fill="white"/>
</g>
<path d="M651.427 178.41C651.427 182.852 647.938 186.125 643.656 186.125C639.374 186.125 635.885 182.852 635.885 178.41C635.885 173.937 639.374 170.696 643.656 170.696C647.938 170.696 651.427 173.937 651.427 178.41ZM648.025 178.41C648.025 175.635 646.003 173.736 643.656 173.736C641.309 173.736 639.287 175.635 639.287 178.41C639.287 181.158 641.309 183.085 643.656 183.085C646.003 183.085 648.025 181.155 648.025 178.41Z" fill="#EA4335"/>
<path d="M668.192 178.41C668.192 182.852 664.703 186.125 660.421 186.125C656.139 186.125 652.65 182.852 652.65 178.41C652.65 173.941 656.139 170.696 660.421 170.696C664.703 170.696 668.192 173.937 668.192 178.41ZM664.79 178.41C664.79 175.635 662.768 173.736 660.421 173.736C658.074 173.736 656.052 175.635 656.052 178.41C656.052 181.158 658.074 183.085 660.421 183.085C662.768 183.085 664.79 181.155 664.79 178.41Z" fill="#FBBC05"/>
<path d="M684.258 171.162V185.012C684.258 190.71 680.884 193.037 676.896 193.037C673.141 193.037 670.881 190.536 670.029 188.49L672.991 187.263C673.518 188.518 674.811 190 676.892 190C679.445 190 681.028 188.431 681.028 185.478V184.369H680.909C680.147 185.304 678.68 186.122 676.829 186.122C672.956 186.122 669.407 182.762 669.407 178.438C669.407 174.084 672.956 170.696 676.829 170.696C678.677 170.696 680.144 171.513 680.909 172.421H681.028V171.165H684.258V171.162ZM681.269 178.438C681.269 175.722 679.449 173.736 677.133 173.736C674.786 173.736 672.82 175.722 672.82 178.438C672.82 181.127 674.786 183.085 677.133 183.085C679.449 183.085 681.269 181.127 681.269 178.438Z" fill="#4285F4"/>
<path d="M689.585 163.043V185.652H686.267V163.043H689.585Z" fill="#34A853"/>
<path d="M702.514 180.95L705.155 182.703C704.303 183.958 702.249 186.122 698.7 186.122C694.3 186.122 691.013 182.734 691.013 178.407C691.013 173.819 694.328 170.692 698.32 170.692C702.34 170.692 704.306 173.878 704.949 175.6L705.302 176.476L694.946 180.748C695.739 182.296 696.972 183.085 698.7 183.085C700.433 183.085 701.634 182.236 702.514 180.95ZM694.387 178.174L701.309 175.311C700.929 174.348 699.783 173.676 698.435 173.676C696.706 173.676 694.3 175.196 694.387 178.174Z" fill="#EA4335"/>
<path d="M623.326 176.403V173.13H634.401C634.509 173.701 634.565 174.376 634.565 175.106C634.565 177.562 633.891 180.598 631.718 182.762C629.605 184.953 626.906 186.122 623.329 186.122C616.7 186.122 611.126 180.744 611.126 174.143C611.126 167.541 616.7 162.163 623.329 162.163C626.996 162.163 629.609 163.596 631.572 165.464L629.253 167.774C627.845 166.459 625.938 165.436 623.326 165.436C618.485 165.436 614.699 169.322 614.699 174.143C614.699 178.963 618.485 182.849 623.326 182.849C626.466 182.849 628.254 181.593 629.399 180.452C630.328 179.527 630.94 178.205 631.181 176.4L623.326 176.403Z" fill="#4285F4"/>
<g filter="url(#filter3_dd)">
<rect x="193" y="130" width="170" height="96" fill="white"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M294.2 171.31L292.2 167.93L288.65 169.62L286.65 166.23L283.1 167.93L281.11 164.53L277.56 166.23L275.56 162.84L272.01 164.54L270.02 161.14L266.46 162.84L258.93 187.36L268.08 190.16C268.425 189.055 269.153 188.109 270.134 187.495C271.115 186.88 272.284 186.636 273.429 186.807C274.573 186.979 275.619 187.554 276.377 188.43C277.135 189.305 277.554 190.422 277.56 191.58V191.68C277.58 192.12 277.53 192.56 277.4 193L286.7 195.85L294.2 171.31Z" fill="#D61920"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M266.78 185.34C266.549 185.302 266.339 185.182 266.188 185.002C266.038 184.822 265.957 184.594 265.96 184.36V172.36C265.959 172.228 265.984 172.098 266.033 171.976C266.083 171.854 266.157 171.743 266.25 171.65C266.343 171.557 266.454 171.483 266.576 171.433C266.698 171.384 266.828 171.359 266.96 171.36H275.63C276.141 171.359 276.647 171.458 277.119 171.652C277.592 171.847 278.021 172.132 278.384 172.492C278.746 172.853 279.033 173.281 279.23 173.752C279.427 174.224 279.529 174.729 279.53 175.24V184.36C279.53 184.507 279.497 184.653 279.434 184.786C279.371 184.919 279.279 185.036 279.166 185.13C279.052 185.224 278.919 185.291 278.776 185.327C278.634 185.364 278.485 185.368 278.34 185.34C278.111 185.3 277.903 185.179 277.754 184.999C277.606 184.82 277.526 184.593 277.53 184.36V175.25C277.53 174.746 277.33 174.263 276.973 173.906C276.617 173.55 276.134 173.35 275.63 173.35H273.74V184.35C273.741 184.484 273.715 184.617 273.663 184.74C273.612 184.864 273.536 184.976 273.44 185.07C273.326 185.183 273.187 185.266 273.033 185.313C272.88 185.361 272.718 185.37 272.56 185.34C272.329 185.302 272.119 185.182 271.968 185.002C271.818 184.822 271.737 184.594 271.74 184.36V173.35H267.96V184.35C267.961 184.497 267.929 184.643 267.868 184.776C267.806 184.91 267.715 185.028 267.603 185.122C267.49 185.217 267.358 185.285 267.216 185.323C267.073 185.361 266.925 185.366 266.78 185.34ZM281.2 190.57C280.967 190.531 280.756 190.41 280.605 190.228C280.454 190.046 280.374 189.816 280.38 189.58C280.381 189.318 280.485 189.066 280.67 188.88C280.855 188.692 281.106 188.584 281.37 188.58C282.22 188.58 282.95 188.04 283.19 187.23L284.22 183.8L280.85 172.53C280.81 172.404 280.795 172.271 280.806 172.139C280.818 172.008 280.856 171.879 280.917 171.762C280.978 171.645 281.062 171.541 281.164 171.457C281.266 171.372 281.383 171.309 281.51 171.27C281.762 171.2 282.031 171.23 282.262 171.353C282.492 171.475 282.667 171.682 282.75 171.93L285.25 180.33L287.79 171.93C287.91 171.47 288.42 171.16 288.94 171.26L289.01 171.27C289.55 171.44 289.85 172.01 289.69 172.54L286.22 184.1L285.12 187.8C284.873 188.596 284.384 189.295 283.72 189.8C283.045 190.306 282.224 190.58 281.38 190.58C281.32 190.582 281.26 190.579 281.2 190.57Z" fill="#FEFEFE"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M220.08 183.15H222.04C222.562 183.15 223.064 182.942 223.433 182.573C223.802 182.204 224.01 181.702 224.01 181.18V175.41C224.011 175.151 223.962 174.895 223.864 174.655C223.766 174.416 223.622 174.198 223.44 174.014C223.258 173.83 223.042 173.684 222.803 173.584C222.565 173.484 222.309 173.431 222.05 173.43H220.08V183.13V183.15ZM218.85 185.21C218.61 185.169 218.392 185.044 218.236 184.857C218.08 184.67 217.997 184.433 218 184.19V166.27C217.998 166.133 218.024 165.997 218.075 165.87C218.127 165.743 218.203 165.627 218.3 165.53C218.417 165.408 218.562 165.318 218.723 165.265C218.883 165.213 219.054 165.201 219.22 165.23C219.72 165.33 220.08 165.75 220.08 166.26V171.36H222.04C222.571 171.359 223.098 171.462 223.589 171.665C224.08 171.867 224.527 172.164 224.903 172.54C225.279 172.915 225.578 173.361 225.782 173.852C225.985 174.342 226.09 174.869 226.09 175.4V181.17C226.087 182.241 225.661 183.267 224.904 184.024C224.147 184.781 223.121 185.207 222.05 185.21H219.04C218.973 185.214 218.906 185.211 218.84 185.2L218.85 185.21Z" fill="#333545"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M233.14 173.35C233.028 173.33 232.914 173.32 232.8 173.32C232.541 173.317 232.283 173.366 232.043 173.465C231.803 173.563 231.584 173.708 231.401 173.891C231.218 174.075 231.073 174.293 230.974 174.533C230.876 174.773 230.827 175.031 230.83 175.29V181.3C230.829 181.559 230.879 181.816 230.977 182.055C231.076 182.295 231.221 182.513 231.404 182.696C231.587 182.879 231.805 183.024 232.045 183.123C232.284 183.221 232.541 183.271 232.8 183.27C233.322 183.27 233.824 183.062 234.193 182.693C234.562 182.324 234.77 181.823 234.77 181.3V175.3C234.77 174.33 234.08 173.52 233.14 173.35ZM232.09 185.3C231.152 185.135 230.303 184.644 229.692 183.914C229.081 183.184 228.747 182.262 228.75 181.31V175.3C228.748 174.768 228.853 174.241 229.057 173.75C229.261 173.259 229.561 172.814 229.94 172.44C230.315 172.065 230.761 171.767 231.252 171.565C231.743 171.362 232.269 171.259 232.8 171.26C233.871 171.26 234.899 171.686 235.657 172.443C236.414 173.201 236.84 174.229 236.84 175.3V181.31C236.84 182.39 236.42 183.41 235.65 184.18C235.276 184.555 234.832 184.852 234.343 185.054C233.854 185.257 233.329 185.361 232.8 185.36C232.562 185.361 232.324 185.341 232.09 185.3ZM243.89 173.36C243.778 173.34 243.664 173.33 243.55 173.33C243.291 173.327 243.033 173.376 242.793 173.475C242.553 173.573 242.334 173.718 242.151 173.901C241.968 174.085 241.823 174.303 241.724 174.543C241.626 174.783 241.577 175.041 241.58 175.3V181.31C241.579 181.569 241.629 181.826 241.727 182.065C241.826 182.305 241.971 182.523 242.154 182.706C242.337 182.889 242.555 183.034 242.795 183.133C243.034 183.231 243.291 183.281 243.55 183.28C243.809 183.281 244.066 183.231 244.305 183.133C244.545 183.034 244.763 182.889 244.946 182.706C245.129 182.523 245.274 182.305 245.373 182.065C245.471 181.826 245.521 181.569 245.52 181.31V175.3C245.52 174.34 244.83 173.53 243.89 173.36ZM242.84 185.3C241.904 185.133 241.057 184.641 240.448 183.912C239.839 183.182 239.507 182.261 239.51 181.31V175.3C239.512 174.711 239.642 174.129 239.891 173.595C240.141 173.061 240.504 172.588 240.956 172.209C241.407 171.83 241.936 171.554 242.505 171.401C243.074 171.247 243.669 171.22 244.25 171.32C245.188 171.483 246.038 171.971 246.651 172.699C247.264 173.427 247.6 174.348 247.6 175.3V181.31C247.601 181.844 247.496 182.373 247.29 182.866C247.084 183.359 246.781 183.806 246.4 184.18C246.026 184.555 245.582 184.852 245.093 185.054C244.604 185.257 244.079 185.361 243.55 185.36C243.31 185.36 243.07 185.34 242.84 185.3ZM251.11 185.34C250.87 185.299 250.652 185.174 250.496 184.987C250.34 184.8 250.257 184.564 250.26 184.32V166.27C250.26 165.99 250.36 165.72 250.56 165.53C250.678 165.414 250.822 165.327 250.981 165.279C251.139 165.23 251.307 165.22 251.47 165.25C251.97 165.33 252.34 165.76 252.34 166.27V176.95L257.12 171.59C257.36 171.33 257.72 171.21 258.08 171.27C258.262 171.3 258.432 171.379 258.572 171.497C258.713 171.616 258.82 171.77 258.881 171.943C258.943 172.117 258.956 172.303 258.921 172.484C258.885 172.665 258.802 172.832 258.68 172.97L255.07 177L258.8 183.83C258.867 183.945 258.911 184.073 258.928 184.205C258.945 184.337 258.936 184.472 258.9 184.6C258.861 184.733 258.796 184.856 258.709 184.962C258.621 185.069 258.513 185.157 258.39 185.22C258.178 185.342 257.93 185.384 257.69 185.34C257.541 185.315 257.399 185.257 257.274 185.17C257.15 185.084 257.046 184.971 256.97 184.84L253.61 178.66L252.33 180.07V184.32C252.33 184.596 252.22 184.86 252.025 185.055C251.83 185.25 251.566 185.36 251.29 185.36C251.22 185.36 251.16 185.36 251.09 185.34H251.11ZM296.92 185.33C296.358 185.236 295.823 185.017 295.356 184.69C294.889 184.363 294.501 183.936 294.22 183.44C294.083 183.197 294.047 182.909 294.12 182.64C294.2 182.38 294.37 182.16 294.6 182.02C294.814 181.903 295.061 181.864 295.3 181.91C295.6 181.96 295.87 182.14 296.02 182.41C296.29 182.87 296.72 183.17 297.25 183.26C297.523 183.308 297.804 183.293 298.07 183.216C298.337 183.14 298.583 183.005 298.79 182.82C299.19 182.45 299.39 181.92 299.34 181.4C299.329 181.133 299.255 180.873 299.125 180.641C298.995 180.408 298.811 180.209 298.59 180.06L295.79 178.07C295.334 177.75 294.954 177.333 294.677 176.849C294.401 176.365 294.234 175.826 294.19 175.27C294.154 174.709 294.246 174.148 294.459 173.628C294.672 173.108 295.001 172.644 295.42 172.27C295.829 171.89 296.318 171.605 296.851 171.438C297.383 171.27 297.947 171.223 298.5 171.3C299.68 171.5 300.64 172.18 301.19 173.14C301.323 173.38 301.357 173.662 301.286 173.927C301.215 174.191 301.045 174.418 300.81 174.56C300.598 174.682 300.35 174.724 300.11 174.68C299.961 174.655 299.819 174.597 299.694 174.51C299.57 174.424 299.466 174.311 299.39 174.18C299.265 173.968 299.094 173.786 298.89 173.648C298.686 173.509 298.454 173.418 298.21 173.38C297.961 173.335 297.705 173.349 297.462 173.42C297.219 173.491 296.995 173.618 296.81 173.79C296.629 173.961 296.488 174.17 296.396 174.401C296.304 174.633 296.265 174.881 296.28 175.13C296.3 175.62 296.58 176.1 297 176.38L299.8 178.33C300.275 178.663 300.668 179.1 300.949 179.608C301.23 180.115 301.391 180.681 301.42 181.26C301.466 181.837 301.377 182.416 301.16 182.953C300.943 183.489 300.604 183.968 300.17 184.35C299.748 184.743 299.243 185.036 298.693 185.209C298.143 185.382 297.561 185.43 296.99 185.35L296.91 185.33H296.92ZM304.95 185.36C304.71 185.318 304.492 185.193 304.335 185.006C304.178 184.82 304.091 184.584 304.09 184.34V166.29C304.089 166.153 304.115 166.017 304.166 165.89C304.218 165.764 304.295 165.649 304.392 165.552C304.488 165.455 304.604 165.378 304.73 165.326C304.857 165.275 304.993 165.249 305.13 165.25L305.33 165.26C305.83 165.36 306.17 165.77 306.17 166.29V171.39H308.14C308.671 171.389 309.197 171.492 309.688 171.695C310.178 171.897 310.624 172.195 311 172.57C311.375 172.946 311.673 173.392 311.875 173.882C312.078 174.373 312.181 174.899 312.18 175.43V184.33C312.181 184.481 312.148 184.63 312.085 184.767C312.022 184.905 311.929 185.026 311.814 185.123C311.698 185.221 311.563 185.291 311.417 185.331C311.271 185.37 311.119 185.376 310.97 185.35C310.47 185.26 310.11 184.83 310.11 184.32V175.42C310.11 175.162 310.059 174.906 309.96 174.668C309.861 174.429 309.715 174.213 309.532 174.031C309.349 173.848 309.132 173.704 308.893 173.606C308.654 173.508 308.398 173.459 308.14 173.46H306.17V184.33C306.171 184.482 306.139 184.632 306.075 184.77C306.011 184.908 305.917 185.03 305.801 185.128C305.684 185.225 305.547 185.296 305.4 185.334C305.253 185.373 305.099 185.378 304.95 185.35V185.36ZM319.23 173.37C318.947 173.319 318.655 173.33 318.377 173.404C318.099 173.478 317.84 173.612 317.619 173.798C317.399 173.983 317.222 174.214 317.101 174.476C316.98 174.737 316.918 175.022 316.92 175.31V181.32C316.919 181.578 316.968 181.834 317.066 182.073C317.164 182.312 317.308 182.529 317.491 182.712C317.673 182.895 317.889 183.041 318.128 183.14C318.366 183.239 318.622 183.29 318.88 183.29C319.4 183.29 319.9 183.09 320.27 182.72C320.455 182.537 320.602 182.319 320.702 182.079C320.801 181.838 320.852 181.58 320.85 181.32V175.3C320.85 174.34 320.17 173.52 319.22 173.36L319.23 173.37ZM318.17 185.29C317.235 185.125 316.388 184.635 315.779 183.907C315.17 183.179 314.837 182.259 314.84 181.31V175.3C314.84 174.71 314.969 174.127 315.218 173.592C315.467 173.057 315.83 172.583 316.282 172.202C316.733 171.822 317.262 171.546 317.832 171.391C318.402 171.237 318.998 171.209 319.58 171.31C320.519 171.473 321.371 171.963 321.984 172.693C322.597 173.423 322.932 174.347 322.93 175.3V181.31C322.93 181.843 322.825 182.37 322.618 182.861C322.412 183.352 322.11 183.797 321.73 184.17C321.271 184.631 320.708 184.973 320.088 185.168C319.468 185.363 318.81 185.405 318.17 185.29Z" fill="#333545"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M338.9 172.54C338.934 172.413 338.943 172.28 338.926 172.15C338.909 172.02 338.866 171.894 338.8 171.78C338.724 171.659 338.625 171.554 338.509 171.471C338.392 171.389 338.26 171.331 338.12 171.3C337.862 171.251 337.595 171.303 337.374 171.444C337.153 171.585 336.994 171.806 336.93 172.06C336.93 172.11 335.81 176.62 334.93 180.05L334.91 180.12L334.89 180.05L332.89 172.07C332.851 171.875 332.754 171.697 332.611 171.559C332.468 171.422 332.286 171.331 332.09 171.3C332.031 171.288 331.97 171.282 331.91 171.28C331.45 171.28 331.05 171.6 330.92 172.06C330.91 172.11 329.79 176.62 328.92 180.05L328.9 180.12L328.88 180.05C328.03 176.62 326.88 172.11 326.88 172.06C326.833 171.869 326.731 171.695 326.588 171.56C326.444 171.425 326.264 171.335 326.07 171.3C325.904 171.271 325.732 171.283 325.572 171.336C325.411 171.389 325.267 171.481 325.151 171.604C325.035 171.727 324.951 171.877 324.907 172.041C324.863 172.204 324.861 172.376 324.9 172.54L327.91 184.57C327.967 184.79 328.095 184.986 328.273 185.127C328.452 185.268 328.672 185.346 328.9 185.35C329.39 185.35 329.78 185.03 329.88 184.57L331.88 176.58L331.91 176.51L331.93 176.58C332.81 180.05 333.93 184.58 333.93 184.58C333.99 184.796 334.117 184.988 334.293 185.126C334.47 185.265 334.686 185.343 334.91 185.35C335.14 185.357 335.366 185.283 335.547 185.14C335.728 184.998 335.853 184.796 335.9 184.57L338.9 172.54Z" fill="#333545"/>
<g filter="url(#filter4_dd)">
<rect x="3" y="130" width="170" height="96" fill="white"/>
</g>
<g clip-path="url(#clip1)">
<path d="M112.364 192.102L120.703 182.866L112.364 173.628H121.163L125.293 178.115L129.271 173.628H137.763L129.463 182.827L137.877 192.102H129.042L124.949 187.578L120.894 192.102H112.364Z" fill="#FF6600"/>
<path d="M112.364 169.486H102.919V173.628H112.364V179.869H102.919V185.598H112.364V192.102H95.9764V163H112.364V169.486Z" fill="#FF6600"/>
<path d="M89.0635 163V174.91H88.9874C87.457 173.176 85.5448 172.573 83.3261 172.573C78.7813 172.573 75.3578 175.619 74.1561 179.645C72.7857 175.209 69.2513 172.49 64.0104 172.49C59.7543 172.49 56.3935 174.373 54.6396 177.442V173.628H45.8422V169.487H55.4426V163H38V192.103H45.8422V179.869H53.6587C53.4257 180.768 53.3013 181.73 53.3013 182.745C53.3013 188.816 58.0061 193.075 64.0104 193.075C69.0596 193.075 72.387 190.739 74.147 186.479H67.4265C66.5174 187.759 65.8278 188.139 64.0104 188.139C61.903 188.139 60.0861 186.326 60.0861 184.178H73.7704C74.3639 189 78.1744 193.158 83.4035 193.158C85.6591 193.158 87.7243 192.064 88.9874 190.218H89.0635V192.102H95.9765V163H89.0635ZM60.3043 179.956C60.7404 178.108 62.1948 176.899 64.0104 176.899C66.0091 176.899 67.3896 178.07 67.7526 179.956C67.9057 179.956 60.3043 179.956 60.3043 179.956ZM84.8683 187.671C82.32 187.671 80.7365 185.331 80.7365 182.887C80.7365 180.275 82.1139 177.763 84.8683 177.763C87.7243 177.763 88.8622 180.275 88.8622 182.887C88.8617 185.364 87.6561 187.671 84.8683 187.671Z" fill="#652C8F"/>
</g>
<g filter="url(#filter5_dd)">
<rect x="383" y="2" width="170" height="96" fill="white"/>
</g>
<g clip-path="url(#clip2)">
<path d="M450.705 45.9592V47.5461H450.753C451.327 46.6965 452.278 45.6959 454.387 45.6959C456.028 45.6959 457.287 46.528 457.827 47.7848H457.875C458.336 47.1494 458.864 46.6684 459.456 46.3279C460.157 45.9241 460.936 45.6924 461.918 45.6924C464.139 45.6924 466.106 47.1318 466.106 50.7618V57.6463H462.719V51.2428C462.719 49.4032 462.052 48.3395 460.666 48.3395C459.651 48.3395 458.913 48.9784 458.632 49.7648C458.535 50.0351 458.49 50.4037 458.49 50.7127V57.6498H455.103V50.983C455.103 49.4208 454.462 48.336 453.095 48.336C452.001 48.336 451.315 49.1434 451.034 49.835C450.915 50.1299 450.877 50.4704 450.877 50.7899V57.6463H447.487V45.9592H450.705ZM483.587 45.9592V48.1639H483.68C484.302 46.4788 485.778 45.6959 487.074 45.6959C487.4 45.6959 487.58 45.7205 487.842 45.7697V48.831C487.532 48.7888 487.243 48.7467 486.838 48.7467C485.37 48.7467 484.347 49.5471 484.089 50.8004C484.032 51.0602 484.014 51.3411 484.014 51.6641V57.6498H480.537V45.9592H483.587ZM492.563 42.087V45.7662H495.5V48.7432H492.563V53.135C492.563 54.5569 492.949 55.245 494.095 55.245C494.635 55.245 495.032 55.1818 495.376 55.101L495.421 57.569C494.961 57.7305 493.979 57.906 492.982 57.906C491.81 57.906 490.832 57.5234 490.236 56.9301C489.555 56.2525 489.24 55.1431 489.24 53.5633V42.087H492.563ZM445.126 57.6463H441.755V42.087H445.126V57.6463ZM436.135 53.4721C436.135 53.6862 436.116 53.9109 436.053 54.104C435.791 54.915 434.895 55.5995 433.779 55.5995C432.846 55.5995 432.104 55.1045 432.104 54.0548C432.104 52.4505 433.992 52.0046 436.139 52.0151V53.4721H436.135ZM439.503 50.6741C439.503 48.0235 438.297 45.6959 434.217 45.6959C432.123 45.6959 430.459 46.2471 429.553 46.7386L430.216 48.8661C431.044 48.3746 432.366 47.9709 433.618 47.9709C435.689 47.9673 436.027 49.0697 436.027 49.7753V49.9438C431.512 49.9368 428.661 51.4008 428.661 54.3848C428.661 56.2069 430.111 57.9131 432.636 57.9131C434.191 57.9131 435.487 57.3338 436.266 56.4035H436.341C436.341 56.4035 436.858 58.4221 439.698 57.6498C439.548 56.8072 439.499 55.912 439.499 54.8342V50.6741H439.503ZM411.724 42.087C412.072 43.7335 413.061 48.515 413.061 48.515C413.477 50.481 413.859 52.5417 414.148 54.1707H414.2C414.481 52.4399 414.923 50.8005 415.395 48.7713L417.062 42.087H420.753L422.311 48.9433C422.719 50.8496 423.045 52.3206 423.304 54.0935H423.353C423.634 52.303 424.001 50.7724 424.402 48.8134L425.9 42.087H429.44L425.053 57.6463C422.259 58.2185 421.187 57.1653 420.805 55.4942C420.423 53.8196 419.674 50.6354 419.674 50.6354C419.288 48.8906 418.988 47.6619 418.778 45.8715H418.726C418.426 47.6444 418.111 48.8871 417.647 50.6319L415.807 57.6498C412.953 58.1834 411.964 57.3935 411.417 55.2485C410.945 53.4124 408 42.0905 408 42.0905H411.724V42.087ZM474.918 53.4721C474.918 53.6862 474.899 53.9109 474.835 54.104C474.573 54.915 473.677 55.5995 472.561 55.5995C471.628 55.5995 470.886 55.1045 470.886 54.0548C470.886 52.4505 472.775 52.0046 474.921 52.0151V53.4721H474.918ZM478.285 50.6741C478.285 48.0235 477.079 45.6959 472.999 45.6959C470.905 45.6959 469.242 46.2471 468.335 46.7386L468.998 48.8661C469.826 48.3746 471.149 47.9709 472.4 47.9709C474.468 47.9673 474.809 49.0697 474.809 49.7753V49.9438C470.298 49.9368 467.447 51.4008 467.447 54.3848C467.447 56.2069 468.901 57.9131 471.422 57.9131C472.973 57.9131 474.273 57.3338 475.049 56.4035H475.127C475.127 56.4035 475.644 58.4221 478.484 57.6498C478.334 56.8072 478.285 55.912 478.285 54.8342V50.6741Z" fill="#041E42"/>
<path d="M509.168 52.2875C509.5 52.8557 509.478 53.4899 509.123 53.7795L502.991 57.999C502.353 58.3619 501.397 57.922 500.855 57.0018C500.31 56.078 500.407 55.0479 501.046 54.685L507.835 51.5837C508.26 51.4224 508.835 51.7193 509.168 52.2875ZM517.238 52.2875C517.574 51.7193 518.145 51.426 518.571 51.58L525.364 54.6813C526.002 55.0443 526.096 56.0744 525.554 56.9982C525.009 57.9183 524.049 58.3545 523.414 57.9953L517.283 53.7759C516.931 53.4899 516.905 52.8521 517.238 52.2875ZM513.201 54.575C513.869 54.575 514.418 54.9123 514.493 55.3559L515.154 62.6803C515.154 63.4061 514.291 64 513.205 64C512.122 64 511.255 63.4061 511.255 62.6803L511.913 55.3559C511.987 54.9123 512.536 54.575 513.201 54.575ZM517.283 46.2241L523.414 42.001C524.049 41.6381 525.009 42.0744 525.554 42.9982C526.096 43.922 526.002 44.9521 525.364 45.315L518.571 48.42C518.145 48.574 517.57 48.2807 517.238 47.7125C516.905 47.1443 516.931 46.5101 517.283 46.2241ZM507.835 48.42L501.046 45.315C500.411 44.9521 500.314 43.922 500.855 42.9982C501.397 42.0744 502.356 41.6381 502.991 42.001L509.123 46.2241C509.478 46.5064 509.5 47.1443 509.168 47.7125C508.835 48.2807 508.26 48.574 507.835 48.42ZM511.913 44.6441L511.255 37.3197C511.255 36.5939 512.118 36 513.205 36C514.291 36 515.154 36.5939 515.154 37.3197L514.493 44.6441C514.418 45.0841 513.869 45.425 513.201 45.425C512.536 45.425 511.987 45.0841 511.913 44.6441ZM527.212 57.9696V57.7863H527.38C527.436 57.7863 527.473 57.823 527.473 57.878C527.473 57.9293 527.436 57.9696 527.38 57.9696H527.212ZM527.074 58.3032C527.074 58.3216 527.089 58.3399 527.111 58.3399H527.182C527.201 58.3399 527.22 58.3216 527.22 58.3032V58.0943H527.335L527.429 58.3142C527.436 58.3289 527.447 58.3399 527.462 58.3399H527.548C527.574 58.3399 527.593 58.3142 527.582 58.2886C527.548 58.2226 527.515 58.1529 527.481 58.0833C527.537 58.0649 527.623 58.01 527.623 57.878C527.623 57.7387 527.507 57.658 527.391 57.658H527.111C527.093 57.658 527.074 57.6764 527.074 57.6947V58.3032ZM526.771 57.999C526.771 57.702 527.018 57.4601 527.32 57.4601C527.623 57.4601 527.869 57.6983 527.869 57.999C527.869 58.2959 527.627 58.5378 527.32 58.5378C527.014 58.5378 526.771 58.2959 526.771 57.999ZM526.641 57.999C526.641 58.3655 526.943 58.6661 527.32 58.6661C527.694 58.6661 528 58.3655 528 57.999C528 57.6324 527.694 57.3318 527.32 57.3318C526.943 57.3318 526.641 57.6324 526.641 57.999Z" fill="#FFC124"/>
</g>
<g filter="url(#filter6_dd)">
<rect x="3" y="2" width="170" height="96" fill="white"/>
</g>
<g clip-path="url(#clip3)">
<path d="M70.0636 51.9752L69.3364 54.031H69.2758C69.1546 53.5674 68.9324 52.862 68.5689 52.0155L64.6705 42.2403H60.853V57.8201H63.3778V48.2062C63.3778 47.6015 63.3778 46.9163 63.3576 46.0698C63.3374 45.6465 63.297 45.324 63.2768 45.0822H63.3374C63.4586 45.6868 63.6 46.1302 63.701 46.4124L68.3871 57.7798H70.1646L74.8102 46.3116C74.9112 46.0496 75.0122 45.5256 75.1132 45.0822H75.1738C75.1132 46.231 75.0728 47.2589 75.0526 47.8837V57.7597H77.7391V42.2H74.0629L70.0636 51.9752ZM80.2841 46.5938H82.9099V57.7597H80.2841V46.5938ZM81.6172 41.8775C81.1728 41.8775 80.8093 42.0387 80.5063 42.3209C80.2033 42.6031 80.0417 42.9659 80.0417 43.4093C80.0417 43.8325 80.2033 44.1953 80.5063 44.4775C80.8093 44.7597 81.1728 44.9008 81.6172 44.9008C82.0616 44.9008 82.4453 44.7395 82.7281 44.4775C83.0311 44.1953 83.1927 43.8325 83.1927 43.4093C83.1927 42.986 83.0311 42.6232 82.7281 42.3209C82.4655 42.0387 82.0818 41.8775 81.6172 41.8775ZM92.2215 46.493C91.7367 46.3922 91.2318 46.3318 90.747 46.3318C89.5553 46.3318 88.4645 46.5938 87.5556 47.1178C86.6467 47.6418 85.9195 48.3674 85.4549 49.2744C84.9702 50.2015 84.7278 51.2698 84.7278 52.4992C84.7278 53.5674 84.9702 54.5147 85.4347 55.3814C85.8993 56.2279 86.5457 56.9132 87.4142 57.3767C88.2424 57.8403 89.2119 58.0822 90.3026 58.0822C91.5549 58.0822 92.6255 57.8201 93.4738 57.3364L93.494 57.3163V54.8977L93.393 54.9783C93.0093 55.2605 92.5649 55.5023 92.1205 55.6434C91.6559 55.8046 91.2318 55.8853 90.8682 55.8853C89.8179 55.8853 88.9897 55.5829 88.404 54.9178C87.798 54.2729 87.495 53.386 87.495 52.2775C87.495 51.1287 87.798 50.2217 88.4242 49.5566C89.0503 48.8915 89.8785 48.5488 90.8884 48.5488C91.7367 48.5488 92.6053 48.831 93.393 49.3953L93.494 49.476V46.9163L93.4738 46.8961C93.1304 46.755 92.7467 46.5938 92.2215 46.493ZM100.887 46.4124C100.24 46.4124 99.6344 46.6139 99.1093 47.0372C98.6649 47.4 98.3619 47.924 98.0993 48.5488H98.0791V46.5938H95.4533V57.7597H98.0791V52.0558C98.0791 51.0884 98.2811 50.2822 98.7255 49.6977C99.1698 49.093 99.7354 48.7907 100.422 48.7907C100.665 48.7907 100.907 48.8511 101.21 48.8915C101.493 48.9721 101.695 49.0527 101.836 49.1535L101.937 49.2341V46.6139L101.876 46.5938C101.695 46.4729 101.331 46.4124 100.887 46.4124ZM108.037 46.3519C106.199 46.3519 104.724 46.8961 103.694 47.9643C102.644 49.0325 102.139 50.5039 102.139 52.3581C102.139 54.0915 102.664 55.5023 103.674 56.5302C104.684 57.538 106.058 58.062 107.774 58.062C109.572 58.062 111.006 57.5178 112.036 56.4294C113.087 55.3411 113.592 53.8899 113.592 52.0961C113.592 50.3225 113.107 48.9116 112.117 47.8837C111.168 46.8558 109.774 46.3519 108.037 46.3519ZM110.138 54.938C109.653 55.5628 108.885 55.8651 107.936 55.8651C106.987 55.8651 106.219 55.5628 105.674 54.8977C105.128 54.2729 104.866 53.3659 104.866 52.217C104.866 51.0279 105.149 50.1209 105.674 49.476C106.219 48.831 106.967 48.5085 107.916 48.5085C108.845 48.5085 109.572 48.8108 110.097 49.4356C110.622 50.0604 110.905 50.9674 110.905 52.1566C110.865 53.3659 110.643 54.3132 110.138 54.938ZM119.449 51.2294C118.621 50.8868 118.096 50.6248 117.854 50.4031C117.652 50.2015 117.551 49.9194 117.551 49.5566C117.551 49.2542 117.672 48.9519 117.975 48.7504C118.278 48.5488 118.621 48.448 119.126 48.448C119.571 48.448 120.035 48.5287 120.479 48.6496C120.924 48.7705 121.328 48.9519 121.651 49.1938L121.752 49.2744V46.8155L121.691 46.7953C121.388 46.6744 120.984 46.5535 120.5 46.4527C120.015 46.3721 119.571 46.3318 119.207 46.3318C117.955 46.3318 116.924 46.6341 116.117 47.2992C115.309 47.924 114.925 48.7705 114.925 49.7581C114.925 50.2822 115.006 50.7457 115.187 51.1287C115.369 51.5116 115.632 51.8744 115.995 52.1767C116.359 52.4589 116.884 52.7814 117.611 53.0837C118.217 53.3457 118.682 53.5473 118.965 53.7085C119.247 53.8698 119.429 54.0511 119.571 54.1922C119.671 54.3535 119.732 54.555 119.732 54.817C119.732 55.5628 119.167 55.9256 118.015 55.9256C117.571 55.9256 117.106 55.8449 116.561 55.6636C116.016 55.4822 115.511 55.2201 115.086 54.9178L114.985 54.8372V57.3969L115.046 57.417C115.43 57.5984 115.894 57.7194 116.46 57.8605C117.025 57.9612 117.53 58.0418 117.975 58.0418C119.328 58.0418 120.439 57.7395 121.227 57.0744C122.035 56.4294 122.459 55.6031 122.459 54.5349C122.459 53.7891 122.257 53.124 121.813 52.6201C121.227 52.1364 120.5 51.6325 119.449 51.2294ZM129.387 46.3519C127.549 46.3519 126.074 46.8961 125.044 47.9643C124.014 49.0325 123.489 50.5039 123.489 52.3581C123.489 54.0915 124.014 55.5023 125.024 56.5302C126.034 57.538 127.408 58.062 129.124 58.062C130.922 58.062 132.356 57.5178 133.386 56.4294C134.437 55.3411 134.942 53.8899 134.942 52.0961C134.942 50.3225 134.457 48.9116 133.467 47.8837C132.518 46.8558 131.124 46.3519 129.387 46.3519ZM131.468 54.938C130.983 55.5628 130.215 55.8651 129.266 55.8651C128.296 55.8651 127.549 55.5628 127.004 54.8977C126.458 54.2729 126.196 53.3659 126.196 52.217C126.196 51.0279 126.478 50.1209 127.004 49.476C127.549 48.831 128.296 48.5085 129.246 48.5085C130.155 48.5085 130.902 48.8108 131.427 49.4356C131.952 50.0604 132.235 50.9674 132.235 52.1566C132.235 53.3659 131.972 54.3132 131.468 54.938ZM148.98 48.7504V46.5938H146.334V43.2884L146.253 43.3085L143.748 44.0542L143.688 44.0744V46.5938H139.729V45.1829C139.729 44.538 139.89 44.0341 140.173 43.7116C140.456 43.3891 140.88 43.2279 141.405 43.2279C141.769 43.2279 142.153 43.3085 142.577 43.4899L142.678 43.5504V41.2729L142.617 41.2527C142.254 41.1318 141.769 41.0511 141.143 41.0511C140.355 41.0511 139.668 41.2325 139.042 41.5349C138.416 41.8775 137.951 42.3411 137.608 42.9659C137.265 43.5705 137.083 44.2558 137.083 45.0418V46.5938H135.245V48.7302H137.083V57.7597H139.729V48.7504H143.688V54.4946C143.688 56.8527 144.799 58.0418 147.021 58.0418C147.384 58.0418 147.768 57.9814 148.131 57.9209C148.515 57.8403 148.798 57.7395 148.96 57.6589L148.98 57.6387V55.4822L148.879 55.5628C148.717 55.6636 148.576 55.7442 148.333 55.8046C148.131 55.8651 147.95 55.8853 147.808 55.8853C147.283 55.8853 146.92 55.7643 146.657 55.462C146.415 55.1798 146.293 54.7163 146.293 54.031V48.7504H148.98Z" fill="#737373"/>
<path d="M27 37H39.3818V49.355H27V37Z" fill="#F25022"/>
<path d="M40.6744 37H53.0562V49.355H40.6744V37Z" fill="#7FBA00"/>
<path d="M27 50.645H39.3818V63H27V50.645Z" fill="#00A4EF"/>
<path d="M40.6744 50.645H53.0562V63H40.6744V50.645Z" fill="#FFB900"/>
</g>
<g filter="url(#filter7_dd)">
<rect x="573" y="2" width="170" height="96" fill="white"/>
</g>
<path d="M636.526 59.321C636.365 58.9308 636.213 58.5206 636.051 58.1704L635.304 56.4994L635.274 56.4694C633.052 51.6666 630.679 46.7838 628.165 41.981L628.064 41.7809C627.811 41.3106 627.559 40.7903 627.296 40.31C626.973 39.7397 626.66 39.1293 626.145 38.549C625.643 37.9418 625.012 37.4526 624.296 37.1166C623.58 36.7807 622.797 36.6064 622.005 36.6064C621.213 36.6064 620.431 36.7807 619.715 37.1166C618.999 37.4526 618.367 37.9418 617.865 38.549C617.39 39.1293 617.037 39.7397 616.714 40.31C616.461 40.8303 616.209 41.3406 615.946 41.8109L615.845 42.011C613.371 46.8138 610.958 51.6966 608.736 56.4994L608.676 56.5594C608.454 57.0797 608.191 57.62 607.939 58.2004C607.777 58.5506 607.615 58.9308 607.454 59.351C607.018 60.4515 606.878 61.6455 607.05 62.8155C607.221 63.9855 607.697 65.0911 608.431 66.0233C609.165 66.9555 610.131 67.6821 611.235 68.1316C612.338 68.581 613.541 68.7378 614.724 68.5864C615.859 68.4384 616.951 68.064 617.936 67.4858C619.248 66.7553 620.511 65.6947 621.924 64.1638C623.338 65.6947 624.631 66.7553 625.913 67.4958C627.146 68.213 628.543 68.6089 629.972 68.6464C631.628 68.6532 633.23 68.0664 634.483 66.9942C635.736 65.922 636.555 64.4369 636.789 62.813C637.059 61.6461 636.968 60.4255 636.526 59.311V59.321ZM622.025 60.982C620.288 58.7807 619.157 56.7595 618.774 55.0285C618.615 54.3871 618.58 53.7215 618.673 53.0674C618.743 52.5571 618.935 52.1068 619.198 51.7266C619.804 50.8561 620.864 50.3158 622.025 50.3158C622.577 50.2991 623.124 50.4184 623.617 50.6629C624.111 50.9074 624.535 51.2694 624.853 51.7166C625.115 52.1169 625.307 52.5571 625.368 53.0674C625.469 53.6477 625.428 54.3181 625.267 55.0285C624.883 56.7295 623.752 58.7707 622.025 60.982ZM634.89 62.4628C634.775 63.2873 634.445 64.0675 633.931 64.7258C633.417 65.3842 632.738 65.8976 631.962 66.215C631.194 66.5352 630.346 66.6253 629.518 66.5352C628.71 66.4351 627.902 66.175 627.074 65.6947C625.699 64.8527 624.463 63.8066 623.409 62.5929C625.529 59.9914 626.812 57.62 627.296 55.5088C627.529 54.5082 627.559 53.6077 627.458 52.7772C627.332 51.9901 627.036 51.2392 626.59 50.576C626.08 49.8568 625.4 49.2727 624.61 48.8749C623.819 48.4771 622.942 48.2778 622.056 48.2946C620.187 48.2946 618.521 49.1551 617.511 50.566C617.057 51.2275 616.763 51.9844 616.653 52.7772C616.522 53.6177 616.552 54.5483 616.815 55.5088C617.299 57.62 618.612 60.0214 620.702 62.6129C619.666 63.8498 618.427 64.9051 617.037 65.7347C616.199 66.215 615.401 66.4652 614.593 66.5652C613.337 66.7247 612.068 66.3864 611.062 65.6238C610.056 64.8612 609.394 63.7361 609.221 62.4929C609.12 61.6924 609.191 60.8919 609.514 59.9914C609.615 59.6712 609.766 59.351 609.928 58.9708C610.15 58.4505 610.413 57.9102 610.665 57.3699L610.705 57.2999C612.887 52.5271 615.27 47.6543 617.744 42.8815L617.845 42.6814C618.097 42.2011 618.35 41.6908 618.612 41.2105C618.875 40.7002 619.157 40.21 619.521 39.8097C619.836 39.4375 620.229 39.1382 620.673 38.9328C621.117 38.7275 621.601 38.621 622.091 38.621C622.581 38.621 623.065 38.7275 623.509 38.9328C623.953 39.1382 624.346 39.4375 624.661 39.8097C625.014 40.21 625.307 40.7002 625.57 41.2105C625.822 41.6908 626.075 42.2111 626.337 42.6814L626.438 42.8815C628.902 47.6543 631.285 52.5271 633.507 57.2999L633.537 57.3299C633.8 57.8502 634.022 58.4305 634.274 58.9308C634.436 59.321 634.597 59.6312 634.698 59.9614C634.89 60.8619 634.991 61.6624 634.89 62.4628ZM648.947 60.7619C648.186 60.7729 647.432 60.614 646.742 60.297C646.051 59.9801 645.441 59.5131 644.958 58.9308C643.871 57.69 643.295 56.0902 643.342 54.4482C643.326 52.7704 643.921 51.1431 645.019 49.8656C645.526 49.2758 646.158 48.8036 646.87 48.482C647.582 48.1605 648.356 47.9975 649.139 48.0045C649.875 47.9845 650.604 48.1504 651.257 48.4864C651.911 48.8225 652.468 49.3177 652.875 49.9256L652.976 48.3547H655.924V60.4417H652.966L652.865 58.6807C652.445 59.3297 651.864 59.8616 651.179 60.2258C650.493 60.5901 649.725 60.7746 648.947 60.7619ZM649.714 57.8802C650.3 57.8802 650.815 57.7201 651.3 57.4299C651.744 57.1097 652.107 56.6895 652.39 56.1792C652.643 55.6689 652.774 55.0586 652.774 54.3782C652.813 53.7872 652.697 53.1963 652.437 52.6631C652.177 52.1299 651.781 51.6728 651.289 51.3364C650.817 51.0446 650.271 50.8899 649.714 50.8899C649.157 50.8899 648.611 51.0446 648.139 51.3364C647.695 51.6566 647.331 52.0768 647.048 52.5871C646.781 53.1499 646.65 53.7665 646.665 54.3882C646.625 54.9791 646.741 55.5701 647.001 56.1032C647.262 56.6364 647.657 57.0935 648.149 57.4299C648.624 57.7201 649.139 57.8802 649.714 57.8802ZM660.973 45.0928C660.973 45.443 660.913 45.7632 660.751 46.0233C660.59 46.2735 660.368 46.5036 660.075 46.6637C659.782 46.8238 659.469 46.8838 659.146 46.8838C658.823 46.8838 658.499 46.8238 658.207 46.6637C657.93 46.5109 657.697 46.2905 657.53 46.0233C657.374 45.7383 657.297 45.417 657.308 45.0928C657.308 44.7326 657.379 44.4124 657.53 44.1622C657.692 43.8621 657.924 43.682 658.207 43.5219C658.499 43.3618 658.812 43.2917 659.146 43.2917C659.467 43.2844 659.785 43.3598 660.068 43.5107C660.351 43.6615 660.59 43.8826 660.761 44.1522C660.908 44.444 660.981 44.7668 660.973 45.0928ZM657.54 60.4017V48.3347H660.751V60.4217H657.53L657.54 60.4017ZM669.335 51.4965V51.5365C669.183 51.4665 668.981 51.4365 668.83 51.4064C668.628 51.3664 668.466 51.3664 668.274 51.3664C667.376 51.3664 666.699 51.6266 666.255 52.1669C665.77 52.7172 665.548 53.4876 665.548 54.4782V60.4117H662.327V48.3247H665.285L665.386 50.1557C665.709 49.5153 666.093 49.0351 666.638 48.6749C667.181 48.3249 667.819 48.1501 668.466 48.1746C668.698 48.1746 668.921 48.1946 669.112 48.2346C669.213 48.2646 669.274 48.2646 669.335 48.2946V51.4965ZM670.627 60.4017V43.3718H673.838V49.8756C674.293 49.2952 674.808 48.845 675.454 48.4948C676.477 47.9977 677.639 47.8567 678.753 48.0945C679.867 48.3323 680.868 48.9351 681.594 49.8055C682.683 51.0488 683.259 52.6527 683.209 54.2981C683.226 55.9759 682.631 57.6032 681.533 58.8808C681.025 59.4705 680.393 59.9428 679.681 60.2643C678.97 60.5858 678.195 60.7489 677.413 60.7418C676.677 60.7618 675.948 60.596 675.294 60.2599C674.641 59.9238 674.084 59.4286 673.677 58.8207L673.576 60.3916L670.627 60.4217V60.4017ZM676.837 57.8802C677.413 57.8802 677.928 57.7201 678.413 57.4299C678.857 57.1097 679.221 56.6895 679.503 56.1792C679.766 55.6689 679.887 55.0586 679.887 54.3782C679.887 53.7078 679.766 53.0974 679.503 52.5871C679.238 52.0951 678.866 51.6678 678.413 51.3364C677.94 51.0446 677.394 50.8899 676.837 50.8899C676.281 50.8899 675.735 51.0446 675.262 51.3364C674.808 51.6566 674.454 52.0768 674.161 52.5871C673.894 53.1499 673.763 53.7665 673.778 54.3882C673.738 54.9791 673.854 55.5701 674.115 56.1032C674.375 56.6364 674.77 57.0935 675.262 57.4299C675.737 57.7201 676.252 57.8802 676.837 57.8802ZM684.421 60.4117V48.3247H687.38L687.481 49.8956C687.853 49.2934 688.38 48.8006 689.008 48.4681C689.637 48.1357 690.344 47.9756 691.055 48.0045C691.869 47.9905 692.67 48.2147 693.356 48.649C694.042 49.0832 694.583 49.7082 694.913 50.4459C695.266 51.2063 695.458 52.1469 695.458 53.1975V60.4417H692.237V53.6177C692.237 52.7772 692.045 52.1169 691.661 51.6266C691.278 51.1463 690.753 50.8861 690.086 50.8861C689.601 50.8861 689.177 50.9862 688.804 51.2063C688.45 51.4365 688.157 51.7266 687.935 52.1369C687.711 52.5516 687.599 53.0172 687.612 53.4876V60.4117H684.421ZM697.064 60.4117V43.3618H700.285V49.8656C700.721 49.282 701.289 48.8072 701.943 48.4789C702.597 48.1507 703.319 47.9779 704.052 47.9745C704.813 47.9634 705.566 48.1223 706.257 48.4393C706.947 48.7563 707.557 49.2232 708.04 49.8055C709.122 51.0488 709.694 52.6477 709.646 54.2881C709.664 55.966 709.068 57.5936 707.97 58.8708C707.462 59.4605 706.83 59.9327 706.118 60.2543C705.406 60.5758 704.632 60.7388 703.85 60.7318C703.114 60.7518 702.385 60.586 701.731 60.2499C701.077 59.9138 700.521 59.4186 700.113 58.8107L700.023 60.3816L697.064 60.4117ZM703.304 57.8802C703.89 57.8802 704.405 57.7201 704.88 57.4299C705.334 57.1097 705.688 56.6895 705.98 56.1792C706.233 55.6689 706.364 55.0586 706.364 54.3782C706.403 53.7872 706.287 53.1963 706.027 52.6631C705.767 52.1299 705.372 51.6728 704.88 51.3364C704.407 51.0446 703.861 50.8899 703.304 50.8899C702.748 50.8899 702.202 51.0446 701.729 51.3364C701.285 51.6566 700.921 52.0768 700.639 52.5871C700.357 53.1449 700.225 53.7651 700.255 54.3882C700.215 54.9791 700.332 55.5701 700.592 56.1032C700.852 56.6364 701.247 57.0935 701.739 57.4299C702.214 57.7201 702.699 57.8802 703.304 57.8802Z" fill="#FF385C"/>
<defs>
<filter id="filter0_dd" x="190" y="0" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter1_dd" x="380" y="128" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter2_dd" x="570" y="128" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter3_dd" x="190" y="128" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter4_dd" x="0" y="128" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter5_dd" x="380" y="0" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter6_dd" x="0" y="0" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<filter id="filter7_dd" x="570" y="0" width="176" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1.5"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="1"/>
<feGaussianBlur stdDeviation="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape"/>
</filter>
<clipPath id="clip0">
<rect width="103" height="32" fill="white" transform="translate(417 162)"/>
</clipPath>
<clipPath id="clip1">
<rect width="100" height="30" fill="white" transform="translate(38 163)"/>
</clipPath>
<clipPath id="clip2">
<rect width="120" height="28" fill="white" transform="translate(408 36)"/>
</clipPath>
<clipPath id="clip3">
<rect width="122" height="26" fill="white" transform="translate(27 37)"/>
</clipPath>
</defs>
</svg>

</div>
</div>

<div class="mt-16    text-white ">
  <Grad>
    <div class="grid grid-flow-row items-center place-content-center ">
    <h2 class=" text-5xl place-self-center font-semibold" >By the numbers</h2>
    <h3 class="mt-6 mb-10" >5 years, consistent quality and you get results. No matter what</h3>
  
    </div>
  
</Grad>
<div class="grid grid-flow-col items-center place-content-center " >
<Cards heading="40+" parag="Happy Clients"></Cards>
<Cards heading="540+" parag="Projects Completed"></Cards>
<Cards heading="300" parag="Dedicated Members"></Cards>
<Cards heading="25+" parag="Awards Won"></Cards>
</div>
</div>
<div class="mt-24 mb-20 text-center grid grid-flow-row  h-96">
<HText classs =" font-extrabold place-self-center text-5xl mb-10 " >Build the next big thing and ship to <br/>market faster</HText> 
<WebButton class="place-self-center rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">Download Now</WebButton>
</div>

<footer class="bg-gray-100  grid grid-flow-col gap-8 p-20 ">
<div class="grid grid-flow-row gap-8">
<div class= "block"> 
<svg  width="74" height="43" viewBox="0 0 74 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M68.4275 4.86251C65.5951 2.02921 61.8254 0.32942 57.8277 0.0830343C53.8303 -0.163352 49.8806 1.06066 46.7221 3.52471C43.8379 1.2826 40.2895 0.0651642 36.6371 0.0644561C32.9846 0.063748 29.436 1.27981 26.5509 3.5208C23.2605 0.937403 19.1087 -0.291964 14.9431 0.0836796C10.7775 0.459321 6.91226 2.41165 4.13651 5.54207C1.36075 8.67251 -0.11621 12.745 0.0071491 16.928C0.130508 21.1111 1.84488 25.0894 4.80028 28.0506L14.8933 38.1509C14.9012 38.1585 14.909 38.1658 14.9178 38.1737C14.9266 38.1815 14.929 38.1852 14.9346 38.1908C14.9451 38.2013 14.9564 38.2108 14.9669 38.2213C15.1273 38.3802 15.2901 38.535 15.4555 38.6858C15.5405 38.7637 15.6265 38.8393 15.713 38.9153C15.7831 38.9764 15.8537 39.037 15.9245 39.0969C18.8016 41.5361 22.4301 42.9106 26.2003 42.9888C29.9708 43.0673 33.653 41.8451 36.629 39.5274C39.7875 41.9913 43.7373 43.2154 47.7347 42.969C51.7323 42.7226 55.502 41.0228 58.3344 38.1896L68.4277 28.0906C71.5017 25.008 73.2279 20.8312 73.2279 16.4765C73.2279 12.1219 71.5014 7.94513 68.4275 4.86251ZM36.6339 4.34235C39.0336 4.34081 41.3798 5.05166 43.3755 6.38489C45.3714 7.71813 46.9268 9.61381 47.8453 11.832C48.7639 14.0502 49.004 16.4913 48.5355 18.8461C48.0669 21.201 46.9107 23.3638 45.2131 25.0608L36.6339 33.6447L28.0545 25.0608C26.3569 23.3638 25.2006 21.2009 24.7321 18.8461C24.2635 16.4912 24.5037 14.0501 25.4222 11.8319C26.3408 9.61369 27.8964 7.718 29.8921 6.38479C31.888 5.05159 34.2342 4.34076 36.6339 4.34235ZM14.4074 26.5759C14.4031 24.9809 14.7149 23.4011 15.3249 21.9276C15.9349 20.4541 16.831 19.1164 17.9612 17.9917L20.2446 15.707C20.1341 17.9907 20.5024 20.2723 21.326 22.4051C22.1495 24.5377 23.41 26.4744 25.0265 28.0906L33.4302 36.4993C31.6175 37.7696 29.4912 38.5178 27.2828 38.6621C25.0746 38.8063 22.8689 38.3414 20.9066 37.3177C18.9442 36.2937 17.3004 34.7508 16.1543 32.8564C15.0082 30.9623 14.4038 28.7895 14.4069 26.5751L14.4074 26.5759ZM7.82783 25.0205C5.68036 22.8723 4.41615 19.9963 4.28494 16.9608C4.15373 13.9253 5.16504 10.9508 7.11911 8.62513C9.07318 6.29941 11.8279 4.79153 14.8391 4.39933C17.8504 4.00713 20.8991 4.75917 23.3831 6.50684L14.9332 14.9617C13.4041 16.4833 12.1919 18.2933 11.3666 20.2869C10.5414 22.2805 10.1195 24.418 10.1254 26.5759C10.1254 26.8306 10.1314 27.0843 10.1433 27.3373L7.82783 25.0205ZM46.7277 38.7153C44.2488 38.7212 41.8286 37.9615 39.7973 36.5399L48.2423 28.0906C49.8588 26.4744 51.1191 24.5377 51.9427 22.405C52.7662 20.2723 53.1346 17.9907 53.0242 15.707L55.3076 17.9917C57.0045 19.6896 58.1597 21.8527 58.6278 24.2076C59.0961 26.5624 58.8557 29.0034 57.9372 31.2216C57.0189 33.4399 55.4637 35.3358 53.4685 36.6696C51.4731 38.0035 49.1274 38.7153 46.7277 38.7153ZM65.3999 25.0608L63.1248 27.3373C63.1363 27.0845 63.1421 26.8308 63.1426 26.5759C63.1485 24.418 62.7266 22.2805 61.9014 20.2869C61.0761 18.2933 59.8637 16.4833 58.3347 14.9617L49.8906 6.51246C52.379 4.77984 55.4256 4.04218 58.4304 4.4447C61.4352 4.84719 64.1806 6.36072 66.126 8.68725C68.0713 11.0138 69.0756 13.9847 68.9412 17.0151C68.8069 20.0456 67.5436 22.9158 65.3999 25.0608Z" fill="#27272A"/>
</svg>
<HText classs ="mt-2 font-extrabold text-1xl" >WEBBER</HText> 
</div>
<div>
<HText classs="text-gray-500" >
Copyright © 2021 WEBBER.</HText>
<HText classs="mt-2 text-gray-500" >
All rights reserved</HText>
</div>
<div>
<svg width="80" height="32" viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z" fill="#27272A"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M70.6677 10.4995C71.4021 10.701 71.9804 11.2948 72.1767 12.0488C72.5333 13.4153 72.5333 16.2666 72.5333 16.2666C72.5333 16.2666 72.5333 19.1178 72.1767 20.4845C71.9804 21.2385 71.4021 21.8322 70.6677 22.0338C69.3369 22.4 64 22.4 64 22.4C64 22.4 58.6631 22.4 57.3322 22.0338C56.5978 21.8322 56.0195 21.2385 55.8232 20.4845C55.4667 19.1178 55.4667 16.2666 55.4667 16.2666C55.4667 16.2666 55.4667 13.4153 55.8232 12.0488C56.0195 11.2948 56.5978 10.701 57.3322 10.4995C58.6631 10.1333 64 10.1333 64 10.1333C64 10.1333 69.3369 10.1333 70.6677 10.4995ZM62.4 13.8666V19.1999L66.6667 16.5333L62.4 13.8666Z" fill="#27272A"/>
</svg>
</div>
</div>
<div class="grid grid-flow-col gap-8" >
<div class="grid grid-flow-row  ">
<HText classs="text-gray-700 text-xl" >
Company</HText>
<HText classs=" text-gray-500" >
About us</HText>
<HText classs=" text-gray-500" >
Blog</HText>
<HText classs=" text-gray-500" >
Contact us</HText>
<HText classs=" text-gray-500" >
Pricing</HText>
<HText classs=" text-gray-500" >
Testimonials</HText>
</div>

<div class="grid grid-flow-row ">
<HText classs="text-gray-700 text-xl" >
Support</HText>
<HText classs=" text-gray-500" >
Help center</HText>
<HText classs=" text-gray-500" >
Terms of service</HText>
<HText classs=" text-gray-500" >
Legal</HText>
<HText classs=" text-gray-500" >
Privacy policy</HText>
<HText classs=" text-gray-500" >
Status</HText>

</div>
<div class="grid grid-flow-row place-content-start gap-4 ">
<HText classs="  text-gray-700 text-xl" >
Get Updates and more</HText>
<div class="grid grid-flow-col place-content-center gap-6 ">
<input type="text" class="rounded-md p-6 h-4" placeholder="Your email address"></input>
<button class="place-self-center p-3 rounded-sm  bg-gradient-to-r from-blue-200 via-blue-100 to-blue-100 text-white ">
<i ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.0845 11.9998C23.0845 12.2879 22.9195 12.5506 22.6599 12.6755L8.34097 19.5698C8.0639 19.7032 7.73347 19.654 7.50734 19.4456C7.28121 19.2372 7.20521 18.9119 7.3156 18.6249L9.8637 11.9998L7.3156 5.37474C7.20521 5.08772 7.28121 4.7624 7.50734 4.554C7.73347 4.3456 8.0639 4.29635 8.34097 4.42976L22.6599 11.324C22.9195 11.449 23.0845 11.7117 23.0845 11.9998ZM11.1824 12.7498L9.39472 17.3977L19.048 12.7498H11.1824ZM19.048 11.2498L9.39472 6.60193L11.1824 11.2498H19.048Z" fill="white"/>
</svg>
</i>
</button>

</div>


</div>
</div>


</footer>
</div>   

    );
  }
}

export default Homepage;
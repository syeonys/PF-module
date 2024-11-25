import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';


export function bgColor() {
  gsap.registerPlugin(ScrollTrigger)
  console.log(document.querySelectorAll('section'));
  
  // plugin 
  
  
  // 각 parallax__item에 스크롤트리거 생성
  document.querySelectorAll('section').forEach((item) => {

    let color = item.getAttribute('data-bg')

    // 안에다 속성 안쓰고 따로 쓸 때는 S 대문자, 더 많은 속성을 제어할 수있음
    ScrollTrigger.create({
      trigger: item,
      start: "top 50%",
      end: "bottom 5%",
      markers: true, //스크롤 트리거 마커 표시

      onEnter: () => gsap.to("body", {
        backgroundColor: color,
        duration: 1.5
      }),

      onEnterBack: () => gsap.to("body", {
        backgroundColor: color,
        duration: 1.5
      })
    })

  })

}
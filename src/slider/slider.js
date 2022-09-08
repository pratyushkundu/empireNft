import React from 'react'
import Card from '../collectiondiv/card'
import './slider.css';
import $ from 'jquery';
import jQuery from 'jquery';
import img_left from '../images/Polygon 4.png'
import img_right from '../images/Polygon 5.png'

const slider = () => {

    const fire = ()=>{
        var slide = function(ele,options) {
            var $ele = $(ele);
            var setting = {
                speed: 1000,
                interval: 2000,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 1, width: "28rem", height: "41.9rem", top: "2.05rem", left: "20rem", $opacity: 0.2 },
                { $zIndex: 2, width: "28rem", height: "41.9rem", top: "2.1rem", left: "0rem", $opacity: 0.4 },
                { $zIndex: 3, width: "28rem", height: "41.9rem", top: "2rem", left: "22rem", $opacity: 0.7 },
                { $zIndex: 4, width: "28rem", height: "42rem", top: "1.7rem", left: "39rem", $opacity: 1},
                { $zIndex: 3, width:"28rem", height: "41.9rem", top: "2rem", left: "56rem", $opacity: 0.7 },
                { $zIndex: 2, width: "28rem", height: "41.9rem", top: "2.1rem", left: "70rem", $opacity: 0.4 },
                { $zIndex: 1, width: "28rem", height: "41.9rem", top: "2.05rem", left: "60rem", $opacity: 0.2 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
    
            $ele.find('.hi-next').on('click', function() {
                next();
            });
            $ele.find('.hi-prev').on('click', function() {
                states.push(states.shift());
                move();
            });
            $ele.on('mouseenter', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function() {
                autoPlay();
            });
    
            move();
            autoPlay();
    
            
            function move() {
                $lis.each(function(index, element) {
                    var state = states[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                });
            }
    
            function next() {
                states.unshift(states.pop());
                move();
            }
    
            function autoPlay() {
                timer = setInterval(next, setting.interval);
            }
        }
        $.fn.hiSlide = function(options) {
            $(this).each(function(index, ele) {
                slide(ele,options);
            });
            return this;
        }
        $(".slide").hiSlide();
    }

    
    return (<>
        <br /><br />
        <div className="slide hi-slide" onLoad={fire}>
            <div className="hi-prev" >
                <img src={img_left}/>
            </div>
            <div className="hi-next">
            <img src={img_right}/>
            </div>
            <ul>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
                <li>
                    <Card />
                </li>
            </ul>
        </div>

        {/* <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <script type="text/javascript" src=""></script> */}
        
    </>
    )
}

export default slider
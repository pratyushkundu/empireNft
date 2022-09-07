import React from 'react'
import Card from '../collectiondiv/card'
import './slider.css';
import $ from 'jquery';
import jQuery from 'jquery';

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
                { $zIndex: 1, width: 288, height: 419, top: 20.5, left: 200, $opacity: 0.2 },
                { $zIndex: 2, width: 288, height: 419, top: 21, left: 0, $opacity: 0.4 },
                { $zIndex: 3, width: 288, height: 419, top: 20, left: 220, $opacity: 0.7 },
                { $zIndex: 4, width: 288, height: 420, top: 17, left: 390, $opacity: 1},
                { $zIndex: 3, width:288, height: 419, top: 20, left: 560, $opacity: 0.7 },
                { $zIndex: 2, width: 288, height: 419, top: 21, left: 700, $opacity: 0.4 },
                { $zIndex: 1, width: 288, height: 419, top: 20.5, left: 600, $opacity: 0.2 }
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
            <div className="hi-prev"></div>
            <div className="hi-next"></div>
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
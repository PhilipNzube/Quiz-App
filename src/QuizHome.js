import React from "react";
import { useNavigate } from 'react-router-dom';

export default function QuizHome() {
    const navigate = useNavigate();
    setTimeout(() => {
        document.getElementById("But2").addEventListener('mouseover', () => {
            if (localStorage.getItem("UnlockedVocabDifficult") == "Yes") {
                document.getElementById("But2").style.backgroundColor = "rgba(184, 6, 6, 0.726)";
            }
        });

        document.getElementById("But2").addEventListener('mouseleave', () => {
            if (localStorage.getItem("UnlockedVocabDifficult") == "Yes") {
                document.getElementById("But2").style.backgroundColor = "rgb(184, 6, 6)";
            }
        });

        if (document.getElementById("LoaderHandler").style.display != "none") {
            document.getElementById("Loader").style.animationName = "FadeInOut";
            document.getElementById("Loader").style.animationDuration = "1.5s";
            document.getElementById("Loader").style.animationIterationCount = "infinite";
            document.getElementById("LoaderI").style.animationName = "FadeInOut2";
            document.getElementById("LoaderI").style.animationDuration = "1.5s";
            document.getElementById("LoaderI").style.animationIterationCount = "infinite";
            setTimeout(() => {
                document.getElementById("Loader").style.animationName = "ZoomOut";
                setTimeout(() => {
                    if (localStorage.getItem("UnlockedVocabDifficult") == "Yes") {
                        document.getElementById("But2").style.backgroundColor = "rgb(184, 6, 6)";
                        document.getElementById("But2").style.cursor = "pointer";
                        document.getElementById("But2").setAttribute("title", "");
                    }
                    document.getElementById("Loader").style.display = "none";
                    document.getElementById("MainContainer").style.display = "block";
                    // document.getElementById("But2").addEventListener('mouseover', () => {
                    //     document.getElementById("ButText2").innerHTML = "You need 2000 points on Light to unlock Difficult";   
                    // });
                }, 800);
            }, 5000);
        }
    }, 1000);
    setTimeout(() => {
        if (document.getElementById("LoaderHandler").style.display == "none") {
            document.getElementById("MainContainer").style.display = "block";
            document.getElementById("But2").style.backgroundColor = "rgb(184, 6, 6)";
            document.getElementById("But2").style.cursor = "pointer";
            document.getElementById("But2").setAttribute("title", "");
        }
    }, 100);
    const VocabLightPage = () => {
        navigate("/VocabLight");
    }

    const ComingSoon = () => {
        alert("COMING SOON");  
    }
    return (
        <>
            <div id="MainContainer">
                <div id="Container">
                    <div id="SubCon">
                        <p id="Games">HOW <span id="Emphasis">STRONG</span> IS YOUR VOCABULARY?</p>
                        <div id="ButCont">
                            <div id="But" onClick={VocabLightPage}>
                                <center id="ButText">LIGHT</center>
                            </div>
                            <div id="But2" title="You need 2000 points on Light to unlock Difficult" onClick={ComingSoon}>
                                <center id="ButText2">DIFFICULT</center>
                            </div>
                        </div>
                    </div>
                    <div id="SubCon2">
                        <p id="Games">TR&#8730;E or F&#215;LSE</p>
                        <div id="ButCont">
                            <div id="But" onClick={ComingSoon}>
                                <center id="ButText">LIGHT</center>
                            </div>
                            <div id="But2" title="You need 2000 points on Light to unlock Difficult" onClick={ComingSoon}>
                                <center id="ButText2">DIFFICULT</center>
                            </div>
                        </div>
                    </div>
                    <div id="SubCon3">
                        <p id="Games">NAME THAT <span id="Emphasis">THING</span></p>
                        <div id="ButCont">
                            <div id="But" onClick={ComingSoon}>
                                <center id="ButText">LIGHT</center>
                            </div>
                            <div id="But2" title="You need 2000 points on Light to unlock Difficult" onClick={ComingSoon}>
                                <center id="ButText2">DIFFICULT</center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
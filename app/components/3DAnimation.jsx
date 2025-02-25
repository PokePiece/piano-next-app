import React from 'react'
import * as THREE from 'three';

const ThreeDThing = () => {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const threeContainer = document.getElementById("three-container");

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    threeContainer.appendChild(renderer.domElement);

    return (
        <section>
            <div id="three-container"></div>
        </section>
    )
}

export default ThreeDThing
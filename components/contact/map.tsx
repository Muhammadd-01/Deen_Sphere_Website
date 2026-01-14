"use client"

import { useEffect, useRef } from "react"

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainer.current) return

    // Create a simple SVG-based interactive map
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttribute("viewBox", "0 0 960 600")
    svg.setAttribute("width", "100%")
    svg.setAttribute("height", "100%")
    svg.setAttribute("style", "background: linear-gradient(to bottom, #0B0B0B, #141414);")

    // Simple world map background
    svg.innerHTML = `
      <defs>
        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1C1C1C;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#141414;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Background -->
      <rect width="960" height="600" fill="url(#mapGradient)"/>
      
      <!-- Grid Lines -->
      <g stroke="#2A2A2A" strokeWidth="1" opacity="0.5">
        ${Array.from({ length: 12 })
          .map((_, i) => `<line x1="${(i + 1) * 80}" y1="0" x2="${(i + 1) * 80}" y2="600"/>`)
          .join("")}
        ${Array.from({ length: 6 })
          .map((_, i) => `<line x1="0" y1="${(i + 1) * 100}" x2="960" y2="${(i + 1) * 100}"/>`)
          .join("")}
      </g>

      <!-- Continents (simplified) -->
      <g fill="#1C1C1C" stroke="#F5B400" strokeWidth="2" opacity="0.8">
        <!-- North America -->
        <circle cx="200" cy="150" r="80" opacity="0.6"/>
        <!-- South America -->
        <circle cx="250" cy="350" r="50" opacity="0.6"/>
        <!-- Europe -->
        <circle cx="450" cy="120" r="60" opacity="0.6"/>
        <!-- Africa -->
        <circle cx="500" cy="350" r="70" opacity="0.6"/>
        <!-- Asia -->
        <circle cx="650" cy="200" r="100" opacity="0.6"/>
        <!-- Australia -->
        <circle cx="750" cy="450" r="40" opacity="0.6"/>
      </g>

      <!-- Marker Points -->
      <g class="markers">
        <!-- Global Hubs -->
        <circle cx="200" cy="150" r="8" fill="#F5B400" class="marker" style="cursor: pointer; filter: drop-shadow(0 0 10px rgba(245, 180, 0, 0.5));"/>
        <circle cx="450" cy="120" r="8" fill="#FFD84D" class="marker" style="cursor: pointer; filter: drop-shadow(0 0 10px rgba(255, 216, 77, 0.5));"/>
        <circle cx="650" cy="200" r="8" fill="#F5B400" class="marker" style="cursor: pointer; filter: drop-shadow(0 0 10px rgba(245, 180, 0, 0.5));"/>
        <circle cx="500" cy="350" r="8" fill="#FFD84D" class="marker" style="cursor: pointer; filter: drop-shadow(0 0 10px rgba(255, 216, 77, 0.5));"/>
      </g>

      <!-- Labels -->
      <text x="200" y="280" textAnchor="middle" fill="#F5B400" fontSize="12" fontWeight="bold" opacity="0.8">North America</text>
      <text x="450" y="40" textAnchor="middle" fill="#F5B400" fontSize="12" fontWeight="bold" opacity="0.8">Europe</text>
      <text x="650" y="330" textAnchor="middle" fill="#F5B400" fontSize="12" fontWeight="bold" opacity="0.8">Asia</text>
      <text x="500" y="450" textAnchor="middle" fill="#F5B400" fontSize="12" fontWeight="bold" opacity="0.8">Africa</text>

      <!-- Connection Lines -->
      <g stroke="#F5B400" strokeWidth="1" opacity="0.3" strokeDasharray="5,5">
        <line x1="200" y1="150" x2="450" y2="120"/>
        <line x1="450" y1="120" x2="650" y2="200"/>
        <line x1="650" y1="200" x2="500" y2="350"/>
        <line x1="500" y1="350" x2="200" y2="150"/>
      </g>

      <!-- Animated Circles (connection indicator) -->
      <circle cx="200" cy="150" r="15" fill="none" stroke="#F5B400" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" from="15" to="35" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="450" cy="120" r="15" fill="none" stroke="#FFD84D" strokeWidth="2" opacity="0.3">
        <animate attributeName="r" from="15" to="35" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.6" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
    `

    mapContainer.current.innerHTML = ""
    mapContainer.current.appendChild(svg)

    // Add hover effects
    const markers = svg.querySelectorAll(".marker")
    markers.forEach((marker, index) => {
      marker.addEventListener("mouseenter", () => {
        marker.setAttribute("r", "12")
        marker.style.filter = "drop-shadow(0 0 20px rgba(245, 180, 0, 0.8))"
      })
      marker.addEventListener("mouseleave", () => {
        marker.setAttribute("r", "8")
        marker.style.filter = "drop-shadow(0 0 10px rgba(245, 180, 0, 0.5))"
      })
    })
  }, [])

  return <div ref={mapContainer} className="w-full h-full" />
}

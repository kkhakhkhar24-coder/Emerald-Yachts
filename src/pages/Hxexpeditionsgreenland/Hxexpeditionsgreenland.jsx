import Navbar from '../../components/Navbar/Navbar'
import Profile_AH from '../../assets/AzamaraMediterraneanCruises/Profile_AH.jpg'
import Profile_Picture_AH from '../../assets/AzamaraMediterraneanCruises/Profile_Picture_AH.jpg'

import {
    Ship, MapPin, Star, Clock, Users, CheckCircle,
    ArrowRight, Compass, Sparkles, Anchor, Calendar, Gem,
    ChevronRight, Crown, Phone, Plus, Minus,
    Globe, LayoutList, Heart, Utensils, Sun, Award,
    Baby, Moon, Music,
    Mic, FileText, GraduationCap, Camera, Snowflake, Waves, Wind, Mountain,
    X, ZoomIn
} from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useState, useEffect } from 'react'
import hero1 from '../../assets/Hxexpeditionsgreenland/MS_Fram_Greenland_HX_00624_v1RGB.jpg'
import hero2 from '../../assets/Hxexpeditionsgreenland/Greenland_Kvanefjord_HX_43483_v1RGB.jpg'
import hero3 from '../../assets/Hxexpeditionsgreenland/BaffinBay_Savissivik_ZodiacTown_TedGatlin_5481.jpg'

// Gallery Images (unused assets)
import galIceChannel from '../../assets/Hxexpeditionsgreenland/- Lemaire Channel - 019 - Espen Mills Espen Mills.jpg'
import galKayaking from '../../assets/Hxexpeditionsgreenland/2 - Kayaking, Orne Harbour - 012 - Espen Mills Espen Mills.jpg'
import galBasaltCliffs from '../../assets/Hxexpeditionsgreenland/3 - Cruising, Spert Island - 013 - Espen Mills Espen Mills.jpg'
import galExplorerLounge from '../../assets/Hxexpeditionsgreenland/Explorer Lounge - MS Fram - 04 - Espen Mills.jpg'
import galCabinSuite from '../../assets/Hxexpeditionsgreenland/Cabin 634 - Q2 - MS Fram - 01 - Espen Mills_V2RGB.jpg'
import galDining from '../../assets/Hxexpeditionsgreenland/Lindstrøm - MS Fram - 02 - Espen Mills.jpg'
import galFjordscape from '../../assets/Hxexpeditionsgreenland/DSCF2729.jpg'
import galMidnightSun from '../../assets/Hxexpeditionsgreenland/_DSF4538.jpg'
import galLandings from '../../assets/Hxexpeditionsgreenland/_Antarctica_SeaIceLanding_ZodiacsGentoos_TedGatlin_1170.jpg'
import galReflections from '../../assets/Hxexpeditionsgreenland/_Antarctica_SeaIceLanding_ZodiacReflection_TedGatlin_1186.jpg'

// Exhaustive additional gallery images
import galCabin543 from '../../assets/Hxexpeditionsgreenland/Cabin 543 - MG - MS Fram - 06 - Espen Mills.jpg'
import galExplorerLounge9 from '../../assets/Hxexpeditionsgreenland/Explorer Lounge - MS Fram - 09 - Espen Mills.jpg'
import galReception from '../../assets/Hxexpeditionsgreenland/Reception - MS Fram - 03 - Espen Mills.jpg'
import galHeimaey from '../../assets/Hxexpeditionsgreenland/_Iceland_Heimaey_KayFochtmann-11.jpg'
import galHeritage from '../../assets/Hxexpeditionsgreenland/_VALPARAISO_0283_PRINT_BYANDREAKLAUSSNER.jpg'

// Newly added Baffin Bay images
import imgZodiacIce from '../../assets/Hxexpeditionsgreenland/20250913_BaffinBay_Savissivik_ZodiacIce_TedGatlin_5604.jpg'
import imgPerformance from '../../assets/Hxexpeditionsgreenland/20250915_BaffinBay_Uummannaq_Performance_TedGatlin_5821.jpg'

/* ─── Greenland Highlights — Tab Panel Layout ─── */
function GreenlandHighlightsSection() {
    const [activeTab, setActiveTab] = useState(0)

    const tabs = [
        {
            number: '01',
            label: "Icebergs & Arctic Scenery",
            icon: Snowflake,
            headline: "Greenland's Icebergs & Arctic Scenery",
            body: "One of the defining features of Greenland expedition cruising is the sheer scale of the scenery. Travelers encounter landscapes found nowhere else on Earth — drifting icebergs the size of city blocks, glacier-carved fjords reflecting midnight light, and remote Arctic coastlines untouched by mass tourism.",
            tags: ['Massive icebergs', 'Glacier carved fjords', 'Ice filled bays', 'Arctic mountains', 'Remote coastlines', 'Midnight sun landscapes'],
            listLabel: "Greenland's iconic highlights include:",
            listItems: [
                'Ilulissat Icefjord — UNESCO World Heritage Site',
                'Sermeq Kujalleq glacier calving icebergs',
                "Scoresby Sund — world's largest fjord system",
                'Dramatic cliffs and remote Arctic landscapes',
            ],
        },
        {
            number: '02',
            label: "HX Expedition Ships",
            icon: Ship,
            headline: "HX Expedition Ships In Greenland",
            body: "HX Expeditions operates purpose-built polar vessels designed for remote Arctic exploration, combining Scandinavian comfort with advanced expedition capability. Each ship is chosen to deliver an immersive experience matched to the demands of Greenlandic waters.",
            ships: [
                {
                    name: 'MS FRIDTJOF NANSEN', badge: 'HYBRID',
                    desc: 'A hybrid powered expedition ship combining modern Scandinavian comfort with advanced polar technology.',
                    bestFor: ['Modern luxury expedition travelers', 'Arctic exploration', 'Eco conscious travelers'],
                },
                {
                    name: 'MS ROALD AMUNDSEN', badge: null,
                    desc: "One of the world's first hybrid powered expedition ships designed specifically for remote exploration.",
                    bestFor: ['Comfortable expedition travel', 'Science focused exploration', 'First time Arctic travelers'],
                },
                {
                    name: 'MS FRAM', badge: null,
                    desc: 'A classic expedition vessel built for polar exploration with a stronger traditional expedition atmosphere.',
                    bestFor: ['Experienced expedition travelers', 'Smaller ship expedition feel', 'Arctic focused itineraries'],
                },
            ],
        },
        {
            number: '03',
            label: "Inuit Culture & Communities",
            icon: Globe,
            headline: "Inuit Culture & Remote Greenland Communities",
            body: "One of the most meaningful aspects of Greenland travel is the opportunity to experience Greenlandic and Inuit culture. HX itineraries often include visits to remote settlements where traditions, storytelling and community life remain deeply connected to Arctic heritage.",
            settlements: ['Nuuk', 'Ilulissat', 'Sisimiut', 'Qeqertarsuaq', 'Ittoqqortoormiit', 'Smaller Arctic settlements'],
            quote: 'Many travelers find the cultural interactions just as memorable as the landscapes themselves.',
            fontWeight: 500,
            
        },
    ]

    const current = tabs[activeTab]

    return (
        <section style={{
            background: 'var(--bg-soft)',
            padding: '100px 20px',
            position: 'relative',
            overflow: 'hidden',
        }}>
            {/* Subtle background decoration */}
            <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '420px', height: '420px',
                background: 'radial-gradient(circle at top right, rgba(39,68,114,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />
            <div style={{
                position: 'absolute', bottom: 0, left: 0,
                width: '300px', height: '300px',
                background: 'radial-gradient(circle at bottom left, rgba(39,68,114,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2 }}>

                {/* Section header */}
                <div style={{ marginBottom: '56px' }}>
                    <span style={{
                        display: 'inline-block',
                        background: 'var(--navy)',
                        color: '#fff',
                        fontSize: '10px', fontWeight: 700, letterSpacing: '3px',
                        padding: '5px 16px', borderRadius: '20px',
                        marginBottom: '18px', textTransform: 'uppercase',
                        fontFamily: 'var(--font-body)',
                    }}>EXPEDITION HIGHLIGHTS</span>
                    <h2 style={{
                        color: 'var(--navy)', fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 500,
                        lineHeight: 1.2, margin: '0 0 14px',
                    }}>
                        Greenland's Icebergs, Arctic Scenery & Inuit Culture
                    </h2>
                    <div style={{ width: '70px', height: '3px', background: 'var(--navy)', borderRadius: '2px' }} />
                </div>

                {/* Tab + Content grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '260px 1fr',
                    gap: '0',
                    background: '#fff',
                    borderRadius: '24px',
                    boxShadow: '0 8px 48px rgba(39,68,114,0.10)',
                    overflow: 'hidden',
                    minHeight: '480px',
                }} className="gl-highlights-grid">

                    {/* Left: Tab selector */}
                    <div style={{
                        background: 'var(--bg-dark)',
                        padding: '40px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '4px',
                    }}>
                        {tabs.map((tab, i) => {
                            const Icon = tab.icon
                            const isActive = activeTab === i
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActiveTab(i)}
                                    style={{
                                        background: isActive ? 'rgba(231,243,245,0.10)' : 'transparent',
                                        border: 'none',
                                        borderLeft: isActive ? '4px solid var(--bg-soft)' : '4px solid transparent',
                                        cursor: 'pointer',
                                        padding: '22px 28px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        textAlign: 'left',
                                        transition: 'all 0.25s ease',
                                        width: '100%',
                                    }}
                                >
                                    <div style={{
                                        width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                                        background: isActive ? 'var(--bg-soft)' : 'rgba(255,255,255,0.07)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: isActive ? 'var(--navy)' : 'rgba(255,255,255,0.5)',
                                        transition: 'all 0.25s ease',
                                    }}>
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <div style={{
                                            fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                                            color: isActive ? 'rgba(231,243,245,0.7)' : 'rgba(255,255,255,0.3)',
                                            fontFamily: 'var(--font-body)', marginBottom: '3px',
                                        }}>{tab.number}</div>
                                        <div style={{
                                            fontSize: '0.82rem', fontWeight: 600,
                                            color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                                            fontFamily: 'var(--font-body)', lineHeight: 1.3,
                                        }}>{tab.label}</div>
                                    </div>
                                </button>
                            )
                        })}

                        {/* Decorative bottom tag */}
                        <div style={{
                            marginTop: 'auto', padding: '24px 28px 10px',
                            borderTop: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <div style={{
                                fontSize: '9px', fontWeight: 700, letterSpacing: '2px',
                                color: 'rgba(255,255,255,0.2)', fontFamily: 'var(--font-body)',
                                textTransform: 'uppercase',
                            }}>HX EXPEDITIONS // GREENLAND</div>
                        </div>
                    </div>

                    {/* Right: Content panel */}
                    <div style={{ padding: '48px 52px', display: 'flex', flexDirection: 'column', gap: '28px' }}>

                        {/* Tab 0: Icebergs */}
                        {activeTab === 0 && (
                            <div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', color: 'var(--navy)',
                                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 500,
                                    margin: '0 0 16px',
                                }}>{current.headline}</h3>
                                <p style={{
                                    color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.75,
                                    fontFamily: 'var(--font-body)', fontWeight: 400, margin: '0 0 28px',
                                }}>{current.body}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                                    {current.tags.map((tag, i) => (
                                        <span key={i} style={{
                                            background: 'var(--bg-soft)',
                                            border: '1px solid rgba(39,68,114,0.12)',
                                            color: 'var(--navy)',
                                            padding: '6px 16px', borderRadius: '20px',
                                            fontSize: '0.78rem', fontWeight: 600,
                                            fontFamily: 'var(--font-body)', letterSpacing: '0.3px',
                                        }}>{tag}</span>
                                    ))}
                                </div>

                                <p style={{
                                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px',
                                    textTransform: 'uppercase', color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-body)', margin: '0 0 16px',
                                }}>{current.listLabel}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {current.listItems.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                            <div style={{
                                                width: '22px', height: '22px', borderRadius: '50%', flexShrink: 0,
                                                background: 'var(--navy)', color: '#fff',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '11px', fontWeight: 700, fontFamily: 'var(--font-body)',
                                            }}>{i + 1}</div>
                                            <span style={{ color: 'var(--text-body)', fontSize: '0.93rem', lineHeight: 1.5, fontFamily: 'var(--font-body)', paddingTop: '2px' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tab 1: Ships */}
                        {activeTab === 1 && (
                            <div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', color: 'var(--navy)',
                                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 500,
                                    margin: '0 0 16px',
                                }}>{current.headline}</h3>
                                <p style={{
                                    color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.75,
                                    fontFamily: 'var(--font-body)', fontWeight: 400, margin: '0 0 28px',
                                }}>{current.body}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    {current.ships.map((ship, i) => (
                                        <div key={i} style={{
                                            background: 'var(--bg-soft)',
                                            border: '1px solid rgba(39,68,114,0.10)',
                                            borderRadius: '14px', padding: '20px 24px',
                                            display: 'flex', flexDirection: 'column', gap: '10px',
                                        }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                {ship.badge && (
                                                    <span style={{
                                                        background: 'var(--navy)', color: '#fff',
                                                        fontSize: '9px', fontWeight: 700, letterSpacing: '1px',
                                                        padding: '2px 9px', borderRadius: '20px',
                                                        fontFamily: 'var(--font-body)',
                                                    }}>{ship.badge}</span>
                                                )}
                                                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-body)', letterSpacing: '0.5px' }}>{ship.name}</span>
                                            </div>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0, fontFamily: 'var(--font-body)', fontWeight: 400 }}>{ship.desc}</p>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                                {ship.bestFor.map((bf, j) => (
                                                    <span key={j} style={{
                                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                                        fontSize: '0.75rem', color: 'var(--navy)', fontWeight: 600, fontFamily: 'var(--font-body)',
                                                    }}>
                                                        <CheckCircle size={12} color="var(--navy)" />
                                                        {bf}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Tab 2: Inuit Culture */}
                        {activeTab === 2 && (
                            <div>
                                <h3 style={{
                                    fontFamily: 'var(--font-display)', color: 'var(--navy)',
                                    fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)', fontWeight: 500,
                                    margin: '0 0 16px',
                                }}>{current.headline}</h3>
                                <p style={{
                                    color: 'var(--text-body)', fontSize: '1rem', lineHeight: 1.75,
                                    fontFamily: 'var(--font-body)', fontWeight: 400, margin: '0 0 28px',
                                }}>{current.body}</p>

                                <p style={{
                                    fontSize: '0.75rem', fontWeight: 700, letterSpacing: '2px',
                                    textTransform: 'uppercase', color: 'var(--text-muted)',
                                    fontFamily: 'var(--font-body)', margin: '0 0 16px',
                                }}>Communities often visited:</p>
                                <div style={{
                                    display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                                    gap: '10px', marginBottom: '32px',
                                }}>
                                    {current.settlements.map((s, i) => (
                                        <div key={i} style={{
                                            background: 'var(--bg-soft)',
                                            border: '1px solid rgba(39,68,114,0.10)',
                                            borderRadius: '12px', padding: '12px 16px',
                                            display: 'flex', alignItems: 'center', gap: '10px',
                                        }}>
                                            <div style={{
                                                width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                                                background: 'var(--navy)', color: '#fff',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                fontSize: '10px', fontWeight: 700, fontFamily: 'var(--font-body)',
                                            }}>
                                                {String(i + 1).padStart(2, '0')}
                                            </div>
                                            <span style={{ color: 'var(--text-body)', fontSize: '0.83rem', fontWeight: 600, fontFamily: 'var(--font-body)', lineHeight: 1.3 }}>{s}</span>
                                        </div>
                                    ))}
                                </div>

                                <div style={{
                                    borderLeft: '4px solid var(--navy)',
                                    background: 'rgba(39,68,114,0.04)',
                                    borderRadius: '0 12px 12px 0',
                                    padding: '18px 24px',
                                }}>
                                    <span style={{ fontSize: '2rem', color: 'var(--navy)', lineHeight: 1, display: 'block', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>"</span>
                                    <p style={{
                                        color: 'var(--navy)', fontSize: '0.95rem', lineHeight: 1.65,
                                        fontStyle: 'italic', fontWeight: 500, margin: 0, fontFamily: 'var(--font-body)',
                                    }}>{current.quote}</p>
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                {/* Bottom indicator dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '28px' }}>
                    {tabs.map((_, i) => (
                        <button key={i} onClick={() => setActiveTab(i)} style={{
                            width: activeTab === i ? '28px' : '8px',
                            height: '8px', borderRadius: '4px',
                            background: activeTab === i ? 'var(--navy)' : 'rgba(39,68,114,0.2)',
                            border: 'none', cursor: 'pointer',
                            transition: 'all 0.3s ease', padding: 0,
                        }} />
                    ))}
                </div>

                <style>{`
                    @media (max-width: 768px) {
                        .gl-highlights-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    )
}

function HXExpeditionsGreenland() {
    const [mediCurrentHero, setMediCurrentHero] = useState(0)
    const mediHeroImages = [hero1, hero2, hero3]

    useEffect(() => {
        const mediTimer = setInterval(() => {
            setMediCurrentHero((prev) => (prev + 1) % mediHeroImages.length)
        }, 5000)
        return () => clearInterval(mediTimer)
    }, [mediHeroImages.length])

    const [mediActiveFaq, setMediActiveFaq] = useState(null)
    const [mediSelectedItinerary, setMediSelectedItinerary] = useState(0)
    const [mediActiveMistake, setMediActiveMistake] = useState(0)
    const [isMediSliderHovered, setIsMediSliderHovered] = useState(false)

    // Gallery States
    const [activeGalleryTab, setActiveGalleryTab] = useState('all')
    const [lightboxIndex, setLightboxIndex] = useState(null)
    const [isMobileViewport, setIsMobileViewport] = useState(false)

    const galleryItems = [
        {
            category: 'scenery',
            categoryName: 'Scenery & Icebergs',
            img: galIceChannel,
            title: 'Sailing through Arctic Channels',
            desc: 'MS Fram carefully navigating narrow, ice-filled waterways along remote Arctic coasts.'
        },
        {
            category: 'adventure',
            categoryName: 'Adventure & Landings',
            img: galKayaking,
            title: 'Glacial Sea Kayaking',
            desc: 'An intimate, silent excursion paddling between floating growlers and towering ice structures.'
        },
        {
            category: 'adventure',
            categoryName: 'Adventure & Landings',
            img: galBasaltCliffs,
            title: 'Basalt Cliffs Expedition',
            desc: 'Zodiac boats navigating narrow stone labyrinths and dramatic basalt cliffs.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: galExplorerLounge,
            title: 'Panoramic Explorer Lounge',
            desc: 'Relaxing indoor observation areas with floor-to-ceiling windows to enjoy the passing scenery.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: galCabinSuite,
            title: 'Nordic Explorer Suite',
            desc: 'Premium suite cabin accommodations featuring stylish Scandinavian design and expansive sea views.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: galDining,
            title: 'Lindstrøm Fine Dining',
            desc: 'Elegant onboard dining serving modern interpretations of traditional Arctic and Nordic dishes.'
        },
        {
            category: 'scenery',
            categoryName: 'Scenery & Icebergs',
            img: galFjordscape,
            title: 'Dramatic Arctic Fjordscape',
            desc: 'Towering granite mountains reflecting in the glassy, ice-dotted waters of Greenlandic fjords.'
        },
        {
            category: 'scenery',
            categoryName: 'Scenery & Icebergs',
            img: galMidnightSun,
            title: 'Golden Hour Polar Glow',
            desc: 'The spectacular midsummer midnight sun casting warm, low-angle light across massive ice fields.'
        },
        {
            category: 'adventure',
            categoryName: 'Adventure & Landings',
            img: galLandings,
            title: 'Expedition Shore Landing',
            desc: 'Safely stepping ashore in custom Zodiac landing crafts to explore untamed, roadless landscapes.'
        },
        {
            category: 'adventure',
            categoryName: 'Adventure & Landings',
            img: galReflections,
            title: 'Mirror-Like Arctic Waters',
            desc: 'Glass-like ocean reflections creating beautiful visual alignment during an early morning outing.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: galCabin543,
            title: 'Nordic Grand Suite',
            desc: 'Expedition suite accommodation providing maximum space, warmth, and relaxation after Arctic adventures.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: galExplorerLounge9,
            title: 'Observation Deck Lounge',
            desc: 'An expansive communal deck space designed for scenic viewing and connecting with fellow polar travelers.'
        },
        {
            category: 'ships',
            categoryName: 'HX Polar Ships',
            img: galReception,
            title: 'Onboard Guest Services',
            desc: 'A dedicated, warm timber reception area to ensure seamless organization of landing schedules.'
        },
        {
            category: 'scenery',
            categoryName: 'Scenery & Icebergs',
            img: galHeimaey,
            title: 'Sub-Arctic Cliffs of Heimaey',
            desc: 'Dramatic sea cliffs and bird-nesting outcroppings typical of sub-Arctic volcanic routes.'
        },
        {
            category: 'adventure',
            categoryName: 'Adventure & Landings',
            img: galHeritage,
            title: 'Expedition Heritage Records',
            desc: 'Historical polar travel records, journals, and navigation charts celebrating legendary exploration history.'
        }
    ]

    const filteredGalleryItems = galleryItems.filter(
        (item) => activeGalleryTab === 'all' || item.category === activeGalleryTab
    )

    useEffect(() => {
        const handleResize = () => {
            setIsMobileViewport(window.innerWidth < 992)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (lightboxIndex === null) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowLeft') {
                setLightboxIndex((prev) => (prev === 0 ? filteredGalleryItems.length - 1 : prev - 1));
            } else if (e.key === 'ArrowRight') {
                setLightboxIndex((prev) => (prev === filteredGalleryItems.length - 1 ? 0 : prev + 1));
            } else if (e.key === 'Escape') {
                setLightboxIndex(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, filteredGalleryItems.length]);

    useEffect(() => {
        if (isMediSliderHovered) return
        const interval = setInterval(() => {
            setMediActiveMistake((prev) => (prev + 1) % 4)
        }, 5000)
        return () => clearInterval(interval)
    }, [isMediSliderHovered])

    const mediToggleFaq = (index) => {
        setMediActiveFaq(mediActiveFaq === index ? null : index)
    }

    const mediItineraries = [
        {
            title: 'West Greenland Explorer',
            bestFor: ['First time Arctic travelers', 'Wildlife enthusiasts', 'Cultural immersion seekers', 'Iceberg photography lovers'],
            highlights: ['Ilulissat Icefjord', 'Nuuk', 'Sisimiut', 'Disko Bay', 'Midnight sun']
        },
        {
            title: 'East Greenland Expedition',
            bestFor: ['Experienced expedition travelers', 'Remote destination seekers', 'Dramatic scenery lovers', 'Photography enthusiasts'],
            highlights: ['Scoresby Sund', 'Ittoqqortoormiit', 'Fjord systems', 'Arctic wildlife', 'Remote landings']
        },
        {
            title: 'Complete Greenland Voyage',
            bestFor: ['Travelers wanting full immersion', 'Bucket list expedition seekers', 'Extended Arctic explorers', 'Culture and wildlife lovers'],
            highlights: ['Full coastline', 'Both coasts', 'Cultural visits', 'Maximum wildlife', 'Deepest immersion']
        },
        {
            title: 'Greenland & Iceland Combined',
            bestFor: ['Travelers wanting two destinations', 'Volcanic and Arctic contrast seekers', 'Flexible travelers', 'Unique itinerary lovers'],
            highlights: ['Ilulissat', 'Reykjavik', 'Geysers', 'Icebergs', 'Two Arctic nations']
        }
    ]

    const mediFaqs = [
        { question: 'Is Greenland worth visiting?', answer: 'Absolutely. Greenland offers one of the world\'s most unique Arctic expedition experiences.' },
        { question: 'Can you see icebergs in Greenland?', answer: 'Yes. Greenland is famous for its enormous icebergs and glacier filled fjords.' },
        { question: 'What wildlife can you see in Greenland?', answer: 'Whales, seals, seabirds, Arctic foxes and occasionally polar bears may be seen depending on the itinerary.' },
        { question: 'What is the best month for Greenland cruises?', answer: 'July and August are often ideal for wildlife, scenery and accessibility.' },
        { question: 'What is Inuit culture in Greenland?', answer: 'Greenlandic Inuit culture is deeply connected to Arctic traditions, hunting, storytelling and community life.' },
        { question: 'Are Greenland cruises cold?', answer: 'Yes, but summer Arctic temperatures are often milder than travelers expect.' },
        { question: 'Are HX Greenland cruises luxury cruises?', answer: 'HX focuses more on expedition comfort and exploration than traditional ultra luxury cruising.' },
        { question: 'Do Greenland cruises include Zodiac landings?', answer: 'Most expedition itineraries include Zodiac excursions and exploration opportunities.' },
        { question: 'What should I pack for Greenland cruises?', answer: 'Layered thermal clothing, waterproof outerwear and sturdy footwear are essential.' },
        { question: 'Can you see whales in Greenland?', answer: 'Yes. Whale sightings are common during parts of the Greenland cruise season.' },
        { question: 'What is Ilulissat Icefjord?', answer: 'Ilulissat Icefjord is a UNESCO World Heritage Site famous for massive calving icebergs.' },
        { question: 'Do you need to be physically fit for Greenland cruises?', answer: 'Moderate mobility is important for Zodiac boarding and Arctic exploration.' },
        { question: 'Are Greenland expedition cruises safe?', answer: 'Yes. Expedition cruises are professionally managed with strong safety protocols.' },
        { question: 'How far in advance should Greenland cruises be booked?', answer: 'Ideally 12 to 18 months in advance for best availability and pricing.' },
        { question: 'Why should I use a travel advisor for Greenland expeditions?', answer: 'Greenland expedition travel involves complex logistics and itinerary differences where expert guidance is extremely valuable.' }
    ]

    const mediMistakes = [
        {
            title: 'Underestimating Arctic Weather',
            desc: 'Arctic weather in Greenland can change rapidly and dramatically. Travelers who underestimate conditions often find themselves underprepared for landings and outdoor exploration.',
            bullets: [
                'Pack layered thermal and waterproof clothing',
                'Expect flexible itinerary changes based on conditions'
            ]
        },
        {
            title: 'Choosing the Wrong Itinerary Length',
            desc: 'Greenland is vast and diverse. Choosing too short an itinerary often means missing the most extraordinary regions, particularly the remote fjords of East Greenland.'
        },
        {
            title: 'Booking Based Only on Price',
            desc: 'Ship quality, expedition team expertise, and itinerary depth vary significantly across Greenland operators. Price alone is a poor guide for expedition travel of this complexity.'
        },
        {
            title: 'Waiting Too Long to Reserve Cabins',
            desc: 'Popular Greenland sailings — especially July and August departures — often sell out 12 to 18 months in advance. Early booking secures the best cabins and pricing.'
        }
    ]


const greenlandSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises",
      "name": "HX Expeditions Greenland Cruises",
      "url": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises",
      "description": "Explore HX Expeditions Greenland cruises with expert guidance from Trips & Ships Luxury Travel. Discover icebergs, Inuit culture, Arctic scenery and remote Greenland communities.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://www.tripsshipsluxurytravel.com/#organization"
      },
      "mainEntity": {
        "@type": "Article",
        "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises#article"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.tripsshipsluxurytravel.com/#organization",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsshipsluxurytravel.com"
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.tripsshipsluxurytravel.com/#travelagency",
      "name": "Trips & Ships Luxury Travel",
      "url": "https://www.tripsshipsluxurytravel.com",
      "description": "Luxury travel agency specializing in cruise vacations, expedition cruises and personalized travel planning."
    },
    {
      "@type": "Person",
      "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes",
      "name": "Angela Hughes",
      "jobTitle": "CEO",
      "worksFor": {
        "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
      },
      "description": "Luxury travel advisor, founder of Luxury Travel University and CEO of Trips & Ships Luxury Travel."
    },
    {
      "@type": "Article",
      "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises#article",
      "headline": "HX Expeditions Greenland Cruises",
      "url": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises",
      "description": "Complete guide to HX Expeditions Greenland cruises including icebergs, Inuit culture, fjords, wildlife, ships and Arctic expedition planning.",
      "image": "https://www.tripsshipsluxurytravel.com/images/hx-expeditions-greenland-cruise.jpg",
      "author": {
        "@id": "https://www.tripsshipsluxurytravel.com/#angela-hughes"
      },
      "publisher": {
        "@id": "https://www.tripsshipsluxurytravel.com/#organization"
      },
      "mainEntityOfPage": {
        "@id": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises"
      }
    },
    {
      "@type": "Service",
      "name": "Greenland Cruise Planning",
      "provider": {
        "@id": "https://www.tripsshipsluxurytravel.com/#travelagency"
      },
      "serviceType": "Greenland Expedition Cruise Planning",
      "description": "Expert Greenland expedition cruise planning services including HX Expeditions recommendations, Arctic itinerary guidance and personalized travel consulting."
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.tripsshipsluxurytravel.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "HX Expeditions",
          "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "HX Expeditions Greenland Cruises",
          "item": "https://www.tripsshipsluxurytravel.com/hx-expeditions-greenland-cruises"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Is Greenland worth visiting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Greenland offers one of the world's most unique Arctic expedition experiences."
          }
        },
        {
          "@type": "Question",
          "name": "Can you see icebergs in Greenland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Greenland is famous for its enormous icebergs and glacier filled fjords."
          }
        },
        {
          "@type": "Question",
          "name": "What wildlife can you see in Greenland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Whales, seals, seabirds, Arctic foxes and occasionally polar bears may be seen depending on the itinerary."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best month for Greenland cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "July and August are often ideal for wildlife, scenery and accessibility."
          }
        },
        {
          "@type": "Question",
          "name": "What is Inuit culture in Greenland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Greenlandic Inuit culture is deeply connected to Arctic traditions, hunting, storytelling and community life."
          }
        },
        {
          "@type": "Question",
          "name": "Are Greenland cruises cold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, but summer Arctic temperatures are often milder than travelers expect."
          }
        },
        {
          "@type": "Question",
          "name": "Are HX Greenland cruises luxury cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "HX focuses more on expedition comfort and exploration than traditional ultra luxury cruising."
          }
        },
        {
          "@type": "Question",
          "name": "Do Greenland cruises include Zodiac landings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most expedition itineraries include Zodiac excursions and exploration opportunities."
          }
        },
        {
          "@type": "Question",
          "name": "What should I pack for Greenland cruises?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Layered thermal clothing, waterproof outerwear and sturdy footwear are essential."
          }
        },
        {
          "@type": "Question",
          "name": "Can you see whales in Greenland?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Whale sightings are common during parts of the Greenland cruise season."
          }
        }
      ]
    }
  ]
};



    return (
        <>
            <Helmet>
                <title>HX Expeditions Greenland Cruises | Icebergs, Inuit Culture & Arctic Exploration
</title>
                <meta name="title" content="HX Expeditions Greenland Cruises | Luxury Arctic Expedition Experts
" />
                <meta name="description" content="Explore HX Expeditions Greenland cruises with expert guidance from Trips & Ships Luxury Travel. Discover icebergs, Inuit culture, Arctic scenery and remote Greenland communities.
" />
                <meta name="keywords" content="HX Expeditions Greenland Cruises,Greenland expedition cruises, Greenland luxury cruises, Greenland small ship cruises, HX Greenland cruises
" />
                <script type="application/ld+json">{JSON.stringify(greenlandSchemaData)}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO ── */}
            <section className="medi-hero-section">
                {mediHeroImages.map((img, idx) => (
                    <div
                        key={idx}
                        className={`medi-hero-background ${mediCurrentHero === idx ? 'medi-active' : ''}`}
                        style={{ backgroundImage: `url(${img})` }}
                    />
                ))}
                <div className="medi-hero-overlay-layer"></div>
                <div className="medi-hero-content-wrapper">
                    <div className="medi-hero-eyebrow-tag">
                        <Anchor size={16} />
                        <span>Arctic Expedition Cruising</span>
                    </div>
                    <h1 className="medi-hero-main-title">
                        HX Expeditions Greenland Cruises
                    </h1>
                </div>
            </section>

            {/* ── PREMIUM INTRO ── */}
            <section className="medi-intro-section medi-premium-intro-section">
                <div className="medi-premium-intro-glow-one"></div>
                <div className="medi-premium-intro-glow-two"></div>
                <div className="medi-intro-container">
                    <div className="medi-premium-intro-grid">

                        <div className="medi-premium-editorial-block">
                            <span className="medi-premium-mini-badge">DISCOVER THE ARCTIC</span>
                            <h2 className="medi-premium-heading">Discover One Of The World's Most Remote & Remarkable Arctic Destinations</h2>
                            <div className="medi-premium-separator"></div>

                            <p className="medi-premium-lead-text">
                                Greenland is unlike anywhere else on Earth. Massive icebergs drift through silent fjords. Tiny colorful communities cling to rugged Arctic coastlines. Glaciers stretch toward the horizon while whales surface in icy waters beneath the midnight sun.
                            </p>

                            <p className="medi-premium-lead-text">
                                For travelers seeking true expedition travel rather than traditional cruising, HX Expeditions Greenland cruises offer one of the most immersive Arctic experiences available today.
                            </p>

                            <p className="medi-premium-lead-text">
                                These voyages focus on exploration, culture, wildlife and deep destination immersion through small ship expedition travel. Travelers experience remote Greenlandic settlements, towering ice formations, dramatic fjords and Inuit traditions that have shaped life in the Arctic for centuries.
                            </p>
                        </div>

                        <div className="medi-premium-signature-panel">
                            <div className="medi-premium-signature-glow"></div>
                            <div className="medi-premium-signature-content">
                                <div className="medi-expert-profile-row">
                                    <div className="medi-expert-avatar-frame">
                                        <Star size={24} className="medi-star-accent" />
                                    </div>
                                    <div>
                                        <span className="medi-expert-card-subtitle">LIFETIME ADVISOR</span>
                                        <h3 className="medi-expert-card-title">Angela Hughes</h3>
                                    </div>
                                </div>
                                <p className="medi-premium-expert-desc">
                                    At Trips & Ships Luxury Travel, we help travelers choose the right Greenland expedition based on comfort expectations, itinerary style, wildlife interests and desired level of adventure.
                                </p>
                                <div className="medi-premium-expert-quote-box">
                                    <span className="medi-quote-mark">"</span>
                                    <p className="medi-premium-expert-quote-text">
                                        With more than 40 years in the travel industry and travel experience across 121+ countries, Angela Hughes and the Trips & Ships Luxury Travel team provide trusted Arctic expedition expertise travelers can rely on.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── NEW SECTION: WHY GREENLAND IS EXTRAORDINARY ── */}
            <section style={{
                background: '#f8fafc',
                borderTop: '1px solid rgba(39, 68, 114, 0.08)',
                borderBottom: '1px solid rgba(39, 68, 114, 0.08)',
                padding: '80px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    right: '-10%',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(39, 68, 114, 0.03) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    pointerEvents: 'none'
                }}></div>

                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1.1fr 0.9fr',
                        gap: '60px',
                        alignItems: 'center'
                    }} className="medi-premium-intro-grid">
                        
                        {/* Text Content Block */}
                        <div>
                            <span style={{
                                display: 'inline-block',
                                background: 'rgba(39, 68, 114, 0.06)',
                                border: '1px solid rgba(39, 68, 114, 0.15)',
                                color: 'var(--navy)',
                                fontSize: '11px',
                                fontWeight: 700,
                                letterSpacing: '3px',
                                padding: '6px 18px',
                                borderRadius: '20px',
                                marginBottom: '20px',
                                textTransform: 'uppercase'
                            }}>
                                UNTOUCHED FRONTIER
                            </span>
                            <h2 style={{
                                color: 'var(--navy)',
                                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                                fontWeight: '500',
                                lineHeight: '1.25',
                                margin: '0 0 20px 0',
                                fontFamily: 'var(--font-display)'
                            }}>
                                Why Greenland Is One Of The World’s Most Extraordinary Expedition Destinations
                            </h2>
                            <div style={{
                                width: '80px',
                                height: '3px',
                                background: 'linear-gradient(90deg, var(--navy) 0%, transparent 100%)',
                                marginBottom: '28px'
                            }}></div>
                            
                            <p style={{
                                fontSize: '1.15rem',
                                color: 'var(--text-body)',
                                fontWeight: 500,
                                lineHeight: 1.6,
                                marginBottom: '20px',
                                fontFamily: 'var(--font-body)'
                            }}>
                                Greenland delivers a style of travel that feels raw, remote and profoundly authentic.
                            </p>
                            
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.7,
                                marginBottom: '16px',
                                fontFamily: 'var(--font-body)'
                            }}>
                                Much of Greenland remains inaccessible except by expedition ship, making cruising one of the best ways to experience the region.
                            </p>

                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--text-muted)',
                                lineHeight: 1.7,
                                margin: 0,
                                fontFamily: 'var(--font-body)'
                            }}>
                                Travelers often describe Greenland as one of the few destinations that still feels truly undiscovered.
                            </p>
                        </div>

                        {/* List/Grid of Greenland Advantages */}
                        <div>
                            <p style={{
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                color: 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '1.5px',
                                marginBottom: '20px',
                                fontFamily: 'var(--font-body)'
                            }}>
                                Unlike more commercial cruise destinations, Greenland offers:
                            </p>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '14px'
                            }}>
                                {[
                                    { icon: Mountain, label: 'Vast untouched Arctic scenery' },
                                    { icon: Snowflake, label: 'Towering icebergs' },
                                    { icon: Waves, label: 'Deep fjord systems' },
                                    { icon: Globe, label: 'Inuit cultural experiences' },
                                    { icon: MapPin, label: 'Remote settlements' },
                                    { icon: Ship, label: 'Small ship exploration' },
                                    { icon: Camera, label: 'Extraordinary photography opportunities' },
                                    { icon: Star, label: 'Wildlife rich Arctic waters' }
                                ].map(({ icon: Icon, label }, i) => (
                                    <div key={i} style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '16px',
                                        background: '#ffffff',
                                        border: '1px solid rgba(39, 68, 114, 0.08)',
                                        padding: '16px 20px',
                                        borderRadius: '16px',
                                        boxShadow: '0 4px 12px rgba(39, 68, 114, 0.01)',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                    className="medi-immersion-card-item"
                                    >
                                        <div style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            background: 'rgba(39, 68, 114, 0.08)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--navy)',
                                            flexShrink: 0,
                                            border: '1px solid rgba(39, 68, 114, 0.12)',
                                            transition: 'all 0.3s ease'
                                        }}
                                        className="medi-immersion-icon-box"
                                        >
                                            <Icon size={20} />
                                        </div>
                                        <span style={{
                                            fontSize: '0.95rem',
                                            fontWeight: '600',
                                            color: 'var(--text-body)',
                                            fontFamily: 'var(--font-body)'
                                        }}>{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── WHY HX EXCELS ── */}
            <section className="medi-excel-section">
                <div className="medi-excel-coord coord-tl">ARCTIC EXPEDITION // HX EXPEDITIONS GREENLAND</div>
                <div className="medi-excel-coord coord-tr">72.0000° N, 40.0000° W</div>
                <div className="medi-excel-coord coord-bl">68.7197° N, 52.8732° W</div>
                <div className="medi-excel-coord coord-br">70.4854° N, 22.0000° W</div>
                <div className="medi-excel-glow-one"></div>
                <div className="medi-excel-glow-two"></div>

                <div className="medi-excel-container">
                    <div className="medi-excel-header-block">
                        <h2 className="medi-excel-main-title">Why Choose HX Expeditions For Greenland Cruises?</h2>
                        <div className="medi-excel-separator"></div>
                        <p className="medi-excel-lead-paragraph">
                            HX Expeditions has decades of polar expedition experience and operates purpose built expedition ships designed for remote Arctic exploration.
                        </p>
                    </div>

                    <div className="medi-excel-grid">
                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    Unlike traditional cruise vacations, HX Greenland itineraries focus heavily on:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Waves, label: 'Expedition landings' },
                                        { icon: Star, label: 'Wildlife encounters' },
                                        { icon: Globe, label: 'Cultural immersion' },
                                        { icon: Compass, label: 'Zodiac exploration' },
                                        { icon: GraduationCap, label: 'Science and education programs' },
                                        { icon: Calendar, label: 'Flexible daily planning based on weather and ice conditions' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="medi-excel-column">
                            <div className="medi-excel-card">
                                <h3 className="medi-excel-card-heading">
                                    HX also works closely with Greenlandic communities to create:
                                </h3>
                                <ul className="medi-excel-list">
                                    {[
                                        { icon: Heart, label: 'More meaningful cultural experiences' },
                                        { icon: Users, label: 'Local connections' },
                                        { icon: Anchor, label: 'Educational onboard atmosphere' },
                                        { icon: Sparkles, label: 'Destination driven programming' },
                                        { icon: Ship, label: 'Purpose built Arctic expedition ships' },
                                        { icon: Crown, label: 'Expedition focused, not entertainment centered' },
                                    ].map(({ icon: Icon, label }, i) => (
                                        <li key={i} className="medi-excel-list-item">
                                            <div className="medi-excel-icon-wrapper"><Icon size={18} /></div>
                                            <span>{label}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="medi-excel-footer-block">
                        <div className="medi-excel-footer-badge"><Sparkles size={20} /></div>
                        <p className="medi-excel-footer-paragraph">
                            Travelers often describe Greenland as one of the few destinations that still feels truly undiscovered.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── GREENLAND HIGHLIGHTS — REDESIGNED ── */}
            <GreenlandHighlightsSection />

            {/* ── GREENLAND PHOTO GALLERY SECTION ── */}
            <section className="greenland-gallery-section" style={{
                backgroundImage: 'radial-gradient(rgba(39, 68, 114, 0.15) 1px, transparent 1px), linear-gradient(180deg, var(--bg-dark, #0f1c2e) 0%, #050a12 100%)',
                backgroundSize: '32px 32px, 100% 100%',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                padding: isMobileViewport ? '60px 16px' : '100px 24px',
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                boxSizing: 'border-box'
            }}>
                <style>{`
                    /* Northern Lights (Aurora Borealis) Animation */
                    @keyframes auroraBorealisPulse {
                        0% {
                            transform: scale(1) translate(0, 0) rotate(0deg);
                            opacity: 0.08;
                        }
                        50% {
                            transform: scale(1.15) translate(25px, -15px) rotate(4deg);
                            opacity: 0.22;
                            filter: hue-rotate(25deg);
                        }
                        100% {
                            transform: scale(0.9) translate(-10px, 15px) rotate(-4deg);
                            opacity: 0.08;
                        }
                    }

                    .aurora-green-1 {
                        animation: auroraBorealisPulse 15s infinite alternate ease-in-out;
                    }
                    .aurora-green-2 {
                        animation: auroraBorealisPulse 20s infinite alternate ease-in-out-reverse;
                    }

                    /* Glass Floating control dock for filters */
                    .greenland-gallery-filter-dock {
                        background: rgba(15, 28, 46, 0.55);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 100px;
                        padding: 6px;
                        display: inline-flex;
                        gap: 6px;
                        flex-wrap: wrap;
                        justify-content: center;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255,255,255,0.05);
                    }

                    @media (max-width: 768px) {
                        .greenland-gallery-filter-dock {
                            border-radius: 20px;
                            padding: 10px;
                            width: 100%;
                            max-width: 480px;
                        }
                    }

                    .greenland-gallery-tab-btn {
                        background: transparent;
                        border: 1px solid transparent;
                        color: rgba(255, 255, 255, 0.6);
                        padding: 10px 24px;
                        border-radius: 100px;
                        font-size: 0.88rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        outline: none;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }
                    .greenland-gallery-tab-btn:hover {
                        color: #ffffff;
                        background: rgba(255, 255, 255, 0.05);
                    }
                    .greenland-gallery-tab-btn.active {
                        background: #ffffff;
                        border-color: rgba(255, 255, 255, 0.15);
                        color: #0f1c2e;
                        box-shadow: 0 4px 20px rgba(255, 255, 255, 0.25);
                    }

                    /* Smooth card entrance when switching tabs */
                    @keyframes cardEntranceGreenland {
                        from {
                            opacity: 0;
                            transform: translateY(20px) scale(0.96);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }

                    /* Premium Card Design with Frosted Glass Footer */
                    .greenland-gallery-card {
                        position: relative;
                        border-radius: 24px;
                        overflow: hidden;
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        background: rgba(15, 28, 46, 0.4);
                        cursor: pointer;
                        transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
                        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
                        animation: cardEntranceGreenland 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
                    }

                    .greenland-gallery-card:hover {
                        transform: translateY(-6px);
                        border-color: rgba(255, 255, 255, 0.25);
                        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.5), 0 0 25px rgba(255, 255, 255, 0.08);
                    }

                    .greenland-gallery-image-wrapper {
                        position: relative;
                        width: 100%;
                        aspect-ratio: 4/3;
                        overflow: hidden;
                    }

                    .greenland-gallery-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    .greenland-gallery-card:hover .greenland-gallery-image {
                        transform: scale(1.08);
                    }

                    /* Category Badge on Image */
                    .greenland-gallery-category-badge {
                        position: absolute;
                        top: 16px;
                        left: 16px;
                        background: rgba(3, 8, 16, 0.65);
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        color: #e7f3f5;
                        padding: 6px 14px;
                        border-radius: 30px;
                        font-size: 10px;
                        font-weight: 700;
                        text-transform: uppercase;
                        letter-spacing: 1.5px;
                        z-index: 4;
                        display: flex;
                        align-items: center;
                        gap: 6px;
                        pointer-events: none;
                        transition: all 0.3s ease;
                    }

                    .greenland-gallery-card:hover .greenland-gallery-category-badge {
                        background: #ffffff;
                        color: #0f1c2e;
                        border-color: #ffffff;
                        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.25);
                    }

                    /* Glass Details Footer Overlay */
                    .greenland-gallery-card-footer {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        background: linear-gradient(to top, rgba(3, 8, 16, 0.98) 0%, rgba(3, 8, 16, 0.8) 60%, rgba(3, 8, 16, 0) 100%);
                        padding: 24px;
                        z-index: 3;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        border-top: 1px solid transparent;
                    }

                    .greenland-gallery-card:hover .greenland-gallery-card-footer {
                        background: rgba(3, 8, 16, 0.96);
                        backdrop-filter: blur(16px);
                        -webkit-backdrop-filter: blur(16px);
                        border-top: 1px solid rgba(255, 255, 255, 0.1);
                    }

                    .greenland-gallery-card-title {
                        color: #ffffff;
                        font-size: 1.15rem;
                        font-weight: 700;
                        margin: 0;
                        font-family: var(--font-body);
                        transition: color 0.3s ease;
                    }

                    .greenland-gallery-card:hover .greenland-gallery-card-title {
                        color: #e7f3f5;
                    }

                    .greenland-gallery-card-desc {
                        max-height: 0;
                        opacity: 0;
                        overflow: hidden;
                        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                        margin: 0;
                        font-size: 0.82rem;
                        color: rgba(255, 255, 255, 0.6);
                        line-height: 1.5;
                    }

                    .greenland-gallery-card:hover .greenland-gallery-card-desc {
                        max-height: 80px;
                        opacity: 1;
                        margin-top: 10px;
                    }

                    /* Zoom Hover Indicator */
                    .greenland-gallery-zoom-indicator {
                        position: absolute;
                        top: 16px;
                        right: 16px;
                        width: 32px;
                        height: 32px;
                        border-radius: 50%;
                        background: rgba(3, 8, 16, 0.65);
                        backdrop-filter: blur(8px);
                        -webkit-backdrop-filter: blur(8px);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #e7f3f5;
                        opacity: 0;
                        transform: scale(0.8);
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        z-index: 4;
                    }

                    .greenland-gallery-card:hover .greenland-gallery-zoom-indicator {
                        opacity: 1;
                        transform: scale(1);
                        background: #ffffff;
                        color: #0f1c2e;
                        border-color: #ffffff;
                        box-shadow: 0 4px 12px rgba(255, 255, 255, 0.25);
                    }

                    /* Lightbox Premium Styling */
                    .greenland-lightbox-overlay {
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: rgba(3, 8, 16, 0.97);
                        backdrop-filter: blur(20px);
                        -webkit-backdrop-filter: blur(20px);
                        z-index: 99999;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 20px;
                        animation: fadeInGreenland 0.35s cubic-bezier(0.16, 1, 0.3, 1);
                    }

                    @keyframes fadeInGreenland {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    /* Floating Lightbox Navigation Buttons */
                    .greenland-lightbox-nav-btn {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        background: rgba(3, 8, 16, 0.7);
                        border: 1px solid rgba(255, 255, 255, 0.15);
                        border-radius: 50%;
                        width: 52px;
                        height: 52px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: white;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                        z-index: 1000000;
                        outline: none;
                        box-shadow: 0 8px 24px rgba(0,0,0,0.5);
                    }
                    .greenland-lightbox-nav-btn:hover {
                        background: #ffffff;
                        color: #0f1c2e;
                        border-color: #ffffff;
                        transform: translateY(-50%) scale(1.1);
                        box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
                    }
                    .greenland-lightbox-nav-btn:active {
                        transform: translateY(-50%) scale(0.95);
                    }
                    .greenland-lightbox-nav-btn.btn-prev {
                        left: -80px;
                    }
                    .greenland-lightbox-nav-btn.btn-next {
                        right: -80px;
                    }
                    @media (max-width: 1100px) {
                        .greenland-lightbox-nav-btn.btn-prev {
                            left: 16px;
                        }
                        .greenland-lightbox-nav-btn.btn-next {
                            right: 16px;
                        }
                    }
                `}</style>

                {/* Animated Northern Lights glows */}
                <div className="aurora-green-1" style={{
                    position: 'absolute',
                    top: '-15%',
                    right: '15%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(16, 185, 129, 0.14) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />
                <div className="aurora-green-2" style={{
                    position: 'absolute',
                    bottom: '-15%',
                    left: '5%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                    filter: 'blur(110px)',
                    pointerEvents: 'none',
                    zIndex: 1
                }} />

                <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 2, width: '100%', boxSizing: 'border-box' }}>
                    
                    {/* Header Block */}
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            color: '#e7f3f5',
                            fontSize: '11px',
                            fontWeight: '700',
                            letterSpacing: '3px',
                            padding: '8px 20px',
                            borderRadius: '100px',
                            marginBottom: '20px',
                            textTransform: 'uppercase'
                        }}>
                            <Camera size={12} color="#e7f3f5" />
                            Visualizing the Expedition
                        </span>
                        <h2 style={{
                            color: '#ffffff',
                            fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
                            fontWeight: '800',
                            margin: '0 0 16px',
                            fontFamily: 'var(--font-display)',
                            lineHeight: '1.2',
                            letterSpacing: '-0.5px'
                        }}>
                            Greenland Expedition Photo Gallery
                        </h2>
                        <div style={{
                            width: '60px',
                            height: '3px',
                            background: '#e7f3f5',
                            margin: '0 auto 20px',
                            borderRadius: '2px'
                        }} />
                        <p style={{
                            color: '#cbd5e1',
                            fontSize: '1.1rem',
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontWeight: '300',
                            lineHeight: '1.7',
                            opacity: 0.95
                        }}>
                            Explore high-definition captures of the Arctic landscape, custom HX polar exploration vessels, and thrilling wilderness landings.
                        </p>
                    </div>

                    {/* Glass Floating Control Dock for Filter Tabs */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '50px'
                    }}>
                        <div className="greenland-gallery-filter-dock">
                            {[
                                { id: 'all', label: 'All Photos', icon: <Globe size={14} /> },
                                { id: 'scenery', label: 'Scenery & Icebergs', icon: <Snowflake size={14} /> },
                                { id: 'ships', label: 'HX Polar Ships', icon: <Ship size={14} /> },
                                { id: 'adventure', label: 'Adventure & Landings', icon: <Camera size={14} /> }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    className={`greenland-gallery-tab-btn ${activeGalleryTab === tab.id ? 'active' : ''}`}
                                    onClick={() => {
                                        setActiveGalleryTab(tab.id);
                                        setLightboxIndex(null); // Close lightbox when tab changes to avoid indices shifting
                                    }}
                                >
                                    {tab.icon}
                                    <span>{tab.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport 
                            ? '1fr' 
                            : 'repeat(auto-fill, minmax(320px, 1fr))',
                        gap: '24px',
                        width: '100%',
                        boxSizing: 'border-box'
                    }}>
                        {filteredGalleryItems.map((item, idx) => (
                            <div
                                key={`${item.title}-${activeGalleryTab}`} // Changing key based on tab forces React to remount, triggering CSS animation
                                className="greenland-gallery-card"
                                onClick={() => setLightboxIndex(idx)}
                            >
                                <div className="greenland-gallery-image-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="greenland-gallery-image"
                                        loading="lazy"
                                    />
                                </div>
                                
                                {/* Category badge displayed on image */}
                                <div className="greenland-gallery-category-badge">
                                    {item.category === 'scenery' && <Snowflake size={12} />}
                                    {item.category === 'ships' && <Ship size={12} />}
                                    {item.category === 'adventure' && <Camera size={12} />}
                                    <span>{item.categoryName}</span>
                                </div>

                                {/* Zoom hover button */}
                                <div className="greenland-gallery-zoom-indicator">
                                    <ZoomIn size={16} />
                                </div>

                                {/* Glass Details Footer */}
                                <div className="greenland-gallery-card-footer">
                                    <h3 className="greenland-gallery-card-title">
                                        {item.title}
                                    </h3>
                                    <p className="greenland-gallery-card-desc">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Lightbox Modal */}
                {lightboxIndex !== null && (
                    <div
                        className="greenland-lightbox-overlay"
                        onClick={() => setLightboxIndex(null)}
                    >
                        <div
                            style={{
                                position: 'relative',
                                maxWidth: '900px',
                                width: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setLightboxIndex(null)}
                                style={{
                                    position: 'absolute',
                                    top: '-55px',
                                    right: '0',
                                    background: 'rgba(255, 255, 255, 0.08)',
                                    border: '1px solid rgba(255, 255, 255, 0.15)',
                                    borderRadius: '50%',
                                    width: '42px',
                                    height: '42px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    outline: 'none',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                                    zIndex: 10
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'
                                    e.currentTarget.style.transform = 'scale(1.05)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                                    e.currentTarget.style.transform = 'scale(1)'
                                }}
                            >
                                <X size={20} />
                            </button>

                            {/* Left Navigation Arrow */}
                            <button
                                className="greenland-lightbox-nav-btn btn-prev"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(prev => (prev === 0 ? filteredGalleryItems.length - 1 : prev - 1));
                                }}
                                aria-label="Previous image"
                            >
                                <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                            </button>

                            {/* Right Navigation Arrow */}
                            <button
                                className="greenland-lightbox-nav-btn btn-next"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setLightboxIndex(prev => (prev === filteredGalleryItems.length - 1 ? 0 : prev + 1));
                                }}
                                aria-label="Next image"
                            >
                                <ChevronRight size={24} />
                            </button>

                            {/* Lightbox Image Container */}
                            <div style={{
                                width: '100%',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                background: '#030810',
                                boxShadow: '0 24px 60px rgba(0,0,0,0.8)'
                            }}>
                                <div style={{
                                    width: '100%',
                                    aspectRatio: '16/10',
                                    maxHeight: '70vh',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: '#000',
                                    position: 'relative'
                                }}>
                                    <img
                                        src={filteredGalleryItems[lightboxIndex].img}
                                        alt={filteredGalleryItems[lightboxIndex].title}
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                                <div style={{
                                    background: 'rgba(15, 28, 46, 0.95)',
                                    padding: '24px 32px',
                                    borderTop: '1px solid rgba(255,255,255,0.08)'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '8px'
                                    }}>
                                        <h3 style={{
                                            color: '#ffffff',
                                            margin: 0,
                                            fontSize: '1.25rem',
                                            fontWeight: '700',
                                            fontFamily: 'var(--font-body)'
                                        }}>
                                            {filteredGalleryItems[lightboxIndex].title}
                                        </h3>
                                        <span style={{
                                            fontSize: '0.78rem',
                                            color: '#e7f3f5',
                                            fontWeight: '600',
                                            background: 'rgba(255,255,255,0.08)',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '1px'
                                        }}>
                                            {filteredGalleryItems[lightboxIndex].categoryName}
                                        </span>
                                    </div>
                                    <p style={{
                                        color: '#cbd5e1',
                                        margin: 0,
                                        fontSize: '0.9rem',
                                        lineHeight: '1.6',
                                        fontWeight: '300'
                                    }}>
                                        {filteredGalleryItems[lightboxIndex].desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>

            {/* ── NEW SECTION: INUIT CULTURAL EXPERIENCES (inline CSS) ── */}
            <section style={{
                background: 'linear-gradient(135deg, #0f1c2e 0%, #152638 50%, #0f1c2e 100%)',
                padding: '80px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Subtle glow accents */}
                <div style={{
                    position: 'absolute', top: '-80px', left: '-80px',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(59,127,196,0.12) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute', bottom: '-60px', right: '-60px',
                    width: '300px', height: '300px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(148,180,212,0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(59,127,196,0.15)',
                            border: '1px solid rgba(59,127,196,0.3)',
                            color: '#94b4d4', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 20px',
                            borderRadius: '20px', marginBottom: '20px'
                        }}>
                            LIVING ARCTIC CULTURE
                        </span>
                        <h2 style={{
                            color: '#ffffff',
                            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                            fontWeight: 700, margin: '0 0 16px',
                            lineHeight: 1.2
                        }}>
                            Inuit Traditions & Community Experiences
                        </h2>
                        <div style={{
                            width: '60px', height: '3px',
                            background: 'linear-gradient(90deg, #3b7fc4, #94b4d4)',
                            borderRadius: '2px', margin: '0 auto 20px'
                        }} />
                        <p style={{
                            color: '#94b4d4', fontSize: '1rem',
                            maxWidth: '680px', margin: '0 auto', lineHeight: 1.7
                        }}>
                            These community visits provide insight into life in one of the world's most remote inhabited regions. Travelers may experience:
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '20px'
                    }}>
                        {[
                            { icon: Music, title: 'Traditional music performances', desc: 'Live performances of Greenlandic throat singing and drum dancing rooted in centuries of Arctic tradition.' },
                            { icon: Utensils, title: 'Greenlandic cuisine', desc: 'Sample traditional foods and local flavors shaped by Arctic hunting and fishing culture.' },
                            { icon: FileText, title: 'Local storytelling', desc: 'Hear firsthand stories from community members about life in the world\'s most remote inhabited places.' },
                            { icon: Sparkles, title: 'Handicrafts', desc: 'Discover handmade Arctic crafts, traditional tools, and artwork passed down through generations.' },
                            { icon: Heart, title: 'Kaffemik social gatherings', desc: 'Experience the beloved Greenlandic tradition of open-house community gatherings and warm hospitality.' },
                            { icon: GraduationCap, title: 'Cultural presentations', desc: 'Expert-led presentations on Greenlandic history, Inuit traditions and the Arctic way of life.' },
                        ].map(({ icon: Icon, title, desc }, i) => (
                            <div key={i} style={{
                                background: 'rgba(255,255,255,0.04)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                borderRadius: '16px',
                                padding: '28px 24px',
                                transition: 'border-color 0.2s',
                            }}>
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    background: 'linear-gradient(135deg, rgba(59,127,196,0.25), rgba(59,127,196,0.1))',
                                    border: '1px solid rgba(59,127,196,0.3)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '18px'
                                }}>
                                    <Icon size={22} color="#94b4d4" />
                                </div>
                                <h3 style={{
                                    color: '#ffffff', fontSize: '0.98rem',
                                    fontWeight: 700, margin: '0 0 10px', lineHeight: 1.3
                                }}>{title}</h3>
                                <p style={{
                                    color: '#94a3b8', fontSize: '0.875rem',
                                    lineHeight: 1.65, margin: 0
                                }}>{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── VIDEO SHOWCASE ── */}
            <section className="medi-video-section" style={{ background: '#ffffff', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 className="medi-section-heading">Experience Greenland with HX Expeditions</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    <p style={{ color: '#475569', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}>
                        Watch this curated showcase of Greenland's towering icebergs, remote fjords, Arctic wildlife and Inuit culture that awaits on an HX expedition.
                    </p>
                    <div style={{
                        maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,28,46,0.12)',
                        border: '1px solid rgba(39,68,114,0.1)',
                        aspectRatio: '16/9', background: '#000'
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/YhsofzgzlEA"
                            title="Experience Greenland with HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

       

            {/* ── EXPERT INSIGHT ── */}
            <section id="greenland-growth-insight" className="medi-expert-editorial-section medi-growth-insight-section">
                <div className="medi-expert-editorial-container">
                    <div className="medi-expert-editorial-card">

                        <div className="medi-editorial-portrait-block">
                            <div className="medi-editorial-image-frame">
                                <img src={Profile_Picture_AH} alt="Angela Hughes - Arctic Expedition Expert" />
                                <div className="medi-editorial-gradient-layer"></div>
                            </div>
                            <div className="medi-editorial-floating-stat">
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">40+</span>
                                    <span className="medi-stat-label">Years Experience</span>
                                </div>
                                <div className="medi-stat-divider"></div>
                                <div className="medi-stat-tile">
                                    <span className="medi-stat-number">121+</span>
                                    <span className="medi-stat-label">Countries Visited</span>
                                </div>
                            </div>
                        </div>

                        <div className="medi-editorial-content-block">
                            <div className="medi-editorial-header">
                                <div className="medi-editorial-eyebrow-container">
                                    <Award size={18} className="medi-editorial-icon-badge" />
                                    <span className="medi-editorial-eyebrow">Expert Insight</span>
                                </div>
                                <h2 className="medi-editorial-title">
                                    Expert Insight from Angela Hughes

                                </h2>
                                <div className="medi-editorial-accent-bar"></div>
                            </div>

                            <p className="medi-editorial-lead-para">
                                Angela Hughes and her team specialize in helping travelers choose the right expedition experiences based on comfort expectations, destination priorities and travel style.
                            </p>

                            <div className="medi-priorities-box">
                                <p className="medi-priorities-intro">
                                    Much of Greenland remains inaccessible except by expedition ship — making cruising one of the best ways to experience the region. Angela consistently sees Greenland travelers prioritizing:
                                </p>
                                <div className="medi-priorities-grid-pills">
                                    {[
                                        'Raw, remote Arctic travel',
                                        'Profound authenticity',
                                        'Extraordinary photography',
                                        'Wildlife rich waters',
                                        'Inuit cultural immersion',
                                        'Truly undiscovered destinations'
                                    ].map((item, idx) => (
                                        <div key={idx} className="medi-priority-pill-item">
                                            <CheckCircle size={15} className="medi-priority-check" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="medi-editorial-body-para">
                                For photographers, Greenland delivers some of the world's most visually spectacular expedition scenery. Many travelers find the cultural interactions just as memorable as the landscapes themselves.
                            </p>

                            <div className="medi-expertise-section-box">
                                <span className="medi-expertise-intro-label">Her expertise spans:</span>
                                <div className="medi-expertise-horizontal-strip">
                                    {[
                                        { title: 'Expedition cruising', icon: Compass },
                                        { title: 'Polar travel', icon: Snowflake },
                                        { title: 'Luxury cruises', icon: Ship },
                                        { title: 'River cruising', icon: Anchor },
                                        { title: 'Global luxury travel planning', icon: Globe }
                                    ].map((item, idx) => {
                                        const IconComponent = item.icon
                                        return (
                                            <div key={idx} className="medi-expertise-pills-row">
                                                <div className="medi-expertise-pill-icon-box">
                                                    <IconComponent size={14} />
                                                </div>
                                                <span className="medi-expertise-pill-text">{item.title}</span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── NEW SECTION: WHAT GREENLAND EXPEDITION TRAVEL ACTUALLY FEELS LIKE (inline CSS) ── */}
            <section style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #0f2040 60%, #0a1628 100%)',
                padding: '80px 20px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59,127,196,0.07) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(148,180,212,0.05) 0%, transparent 50%)',
                    pointerEvents: 'none'
                }} />

                <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '52px' }}>
                        <span style={{
                            display: 'inline-block',
                            background: 'rgba(59,127,196,0.15)',
                            border: '1px solid rgba(59,127,196,0.3)',
                            color: '#94b4d4', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 20px',
                            borderRadius: '20px', marginBottom: '20px'
                        }}>
                            EXPEDITION REALITY
                        </span>
                        <h2 style={{
                            color: '#ffffff',
                            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                            fontWeight: 700, margin: '0 0 16px', lineHeight: 1.2
                        }}>
                            What Greenland Expedition Travel Actually Feels Like
                        </h2>
                        <div style={{
                            width: '60px', height: '3px',
                            background: 'linear-gradient(90deg, #3b7fc4, #94b4d4)',
                            borderRadius: '2px', margin: '0 auto 20px'
                        }} />
                        <p style={{ color: '#94b4d4', fontSize: '1rem', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
                            Greenland expedition cruising feels very different from mainstream cruising.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>

                        {/* Travelers Should Expect */}
                        <div style={{
                            background: 'rgba(59,127,196,0.07)',
                            border: '1px solid rgba(59,127,196,0.2)',
                            borderRadius: '20px', padding: '36px'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
                                <div style={{
                                    width: '46px', height: '46px', borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #3b7fc4, #1a5fa8)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                                    boxShadow: '0 4px 16px rgba(59,127,196,0.3)'
                                }}>
                                    <CheckCircle size={22} color="#fff" />
                                </div>
                                <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Travelers Should Expect</h3>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                {[
                                    'Flexible itineraries',
                                    'Zodiac excursions',
                                    'Remote landings',
                                    'Wildlife spotting',
                                    'Expedition briefings',
                                    'Casual onboard atmosphere',
                                    'Educational lectures',
                                    'Nature focused exploration'
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div style={{
                                            width: '22px', height: '22px', borderRadius: '50%',
                                            background: 'rgba(59,127,196,0.2)',
                                            border: '1px solid rgba(59,127,196,0.4)',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                        }}>
                                            <CheckCircle size={13} color="#3b7fc4" />
                                        </div>
                                        <span style={{ color: '#cbd5e1', fontSize: '0.95rem' }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Travelers Should Not Expect */}
                        <div style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            borderRadius: '20px', padding: '36px',
                            display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                        }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '28px' }}>
                                    <div style={{
                                        width: '46px', height: '46px', borderRadius: '50%',
                                        background: 'rgba(239,68,68,0.12)',
                                        border: '1px solid rgba(239,68,68,0.25)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                    }}>
                                        <Minus size={22} color="#f87171" />
                                    </div>
                                    <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>Travelers Should Not Expect</h3>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                                    {[
                                        'Casinos',
                                        'Broadway entertainment',
                                        'Formal cruise nights',
                                        'Large ship nightlife'
                                    ].map((item, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <div style={{
                                                width: '22px', height: '22px', borderRadius: '50%',
                                                background: 'rgba(239,68,68,0.1)',
                                                border: '1px solid rgba(239,68,68,0.25)',
                                                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                            }}>
                                                <Minus size={12} color="#f87171" />
                                            </div>
                                            <span style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{
                                marginTop: '32px', padding: '20px 24px',
                                background: 'linear-gradient(135deg, rgba(59,127,196,0.12), rgba(59,127,196,0.06))',
                                border: '1px solid rgba(59,127,196,0.2)',
                                borderRadius: '12px'
                            }}>
                                <p style={{
                                    color: '#94b4d4', fontSize: '1rem',
                                    margin: 0, fontStyle: 'italic',
                                    fontWeight: 500, lineHeight: 1.6
                                }}>
                                    "Greenland itself becomes the experience."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NEW SECTION: BEST TIME TO CRUISE GREENLAND (inline CSS) ── */}
            <section style={{ background: '#f8fafc', padding: '80px 20px' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                        <span style={{
                            display: 'inline-block', background: '#e8f0fb',
                            color: '#1a5fa8', fontSize: '11px', fontWeight: 700,
                            letterSpacing: '3px', padding: '6px 18px',
                            borderRadius: '20px', marginBottom: '16px'
                        }}>
                            PLAN YOUR ARCTIC VOYAGE
                        </span>
                        <h2 className="medi-section-heading">Best Time To Cruise Greenland</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                        <p style={{ color: '#475569', fontSize: '1rem', maxWidth: '640px', margin: '0 auto' }}>
                            The right Greenland departure depends heavily on whether travelers prioritize wildlife, scenery, cultural experiences or photography.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                        {[
                            {
                                months: 'June & July',
                                icon: Sun,
                                color: 'var(--navy)',
                                bg: 'var(--bg-soft)',
                                items: ['Midnight sun', 'Icebergs', 'Longer exploration days', 'Arctic scenery', 'Peak expedition season']
                            },
                            {
                                months: 'August',
                                icon: Waves,
                                color: 'var(--navy)',
                                bg: 'var(--bg-soft)',
                                items: ['Whale watching', 'Accessible fjords', 'Milder temperatures', 'Wildlife activity']
                            },
                            {
                                months: 'September',
                                icon: Camera,
                                color: 'var(--navy)',
                                bg: 'var(--bg-soft)',
                                items: ['Autumn Arctic colors', 'Photography', 'Fewer ships', 'Late season scenery']
                            }
                        ].map(({ months, icon: Icon, color, bg, items }, i) => (
                            <div key={i} style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                padding: '32px 28px',
                                boxShadow: '0 4px 24px rgba(15,28,46,0.07)',
                                border: '1px solid rgba(15,28,46,0.06)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute', top: 0, left: 0, right: 0,
                                    height: '4px',
                                    background: `linear-gradient(90deg, ${color}, ${color}88)`
                                }} />
                                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
                                    <div style={{
                                        width: '50px', height: '50px', borderRadius: '14px',
                                        background: bg,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                    }}>
                                        <Icon size={24} color={color} />
                                    </div>
                                    <h3 style={{ color: '#0f1c2e', fontSize: '1.05rem', fontWeight: 700, margin: 0 }}>{months}</h3>
                                </div>
                                <p style={{
                                    color: '#64748b', fontSize: '0.78rem', fontWeight: 700,
                                    letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '14px'
                                }}>Best for:</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {items.map((item, j) => (
                                        <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                            <div style={{
                                                width: '7px', height: '7px',
                                                borderRadius: '50%',
                                                background: color, flexShrink: 0
                                            }} />
                                            <span style={{ color: '#374151', fontSize: '0.9rem' }}>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NEW LANDSCAPE BANNERS: SEASONS OF GREENLAND ── */}
            <section style={{
                padding: '0 20px 80px',
                background: '#f8fafc',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobileViewport ? '1fr' : '1fr 1fr',
                        gap: '30px'
                    }}>
                        {/* Card 1: Baffin Bay Zodiac Ice Cruising */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '16/10',
                            boxShadow: '0 20px 40px rgba(15,28,46,0.1)',
                            border: '1px solid rgba(39,68,114,0.1)'
                        }}>
                            <img 
                                src={imgZodiacIce} 
                                alt="Zodiac Cruising among Baffin Bay Icebergs" 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 0.8s ease'
                                }}
                                className="greenland-seasonal-banner-img"
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'linear-gradient(to top, rgba(15, 28, 46, 0.9) 0%, rgba(15, 28, 46, 0.4) 60%, rgba(15, 28, 46, 0.1) 100%)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '30px',
                                zIndex: 2
                            }}>
                                <div>
                                    <span style={{
                                        display: 'inline-block',
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        color: '#ffffff',
                                        fontSize: '9px',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        marginBottom: '12px',
                                        textTransform: 'uppercase',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        SAVISSIVIK EXPEDITION
                                    </span>
                                    <h3 style={{
                                        color: '#ffffff',
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                                        fontWeight: '600',
                                        lineHeight: '1.3',
                                        margin: '0 0 8px'
                                    }}>
                                        Zodiac Cruising in Baffin Bay
                                    </h3>
                                    <p style={{
                                        color: '#cbd5e1',
                                        fontSize: '0.88rem',
                                        lineHeight: '1.5',
                                        margin: 0,
                                        fontWeight: '300'
                                    }}>
                                        Navigate deep between colossal icebergs and glassy, reflection-filled waters in custom-built Zodiac craft.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Cultural Performance at Uummannaq */}
                        <div style={{
                            position: 'relative',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            aspectRatio: '16/10',
                            boxShadow: '0 20px 40px rgba(15,28,46,0.1)',
                            border: '1px solid rgba(39,68,114,0.1)'
                        }}>
                            <img 
                                src={imgPerformance} 
                                alt="Inuit Cultural Performance in Uummannaq" 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 0.8s ease'
                                }}
                                className="greenland-seasonal-banner-img"
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, bottom: 0,
                                background: 'linear-gradient(to top, rgba(15, 28, 46, 0.9) 0%, rgba(15, 28, 46, 0.4) 60%, rgba(15, 28, 46, 0.1) 100%)',
                                display: 'flex',
                                alignItems: 'flex-end',
                                padding: '30px',
                                zIndex: 2
                            }}>
                                <div>
                                    <span style={{
                                        display: 'inline-block',
                                        background: 'rgba(255, 255, 255, 0.2)',
                                        backdropFilter: 'blur(8px)',
                                        WebkitBackdropFilter: 'blur(8px)',
                                        color: '#ffffff',
                                        fontSize: '9px',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        padding: '4px 12px',
                                        borderRadius: '20px',
                                        marginBottom: '12px',
                                        textTransform: 'uppercase',
                                        border: '1px solid rgba(255,255,255,0.1)'
                                    }}>
                                        UUMMANNAQ CULTURE
                                    </span>
                                    <h3 style={{
                                        color: '#ffffff',
                                        fontFamily: 'var(--font-display)',
                                        fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                                        fontWeight: '600',
                                        lineHeight: '1.3',
                                        margin: '0 0 8px'
                                    }}>
                                        Traditional Inuit Performances
                                    </h3>
                                    <p style={{
                                        color: '#cbd5e1',
                                        fontSize: '0.88rem',
                                        lineHeight: '1.5',
                                        margin: 0,
                                        fontWeight: '300'
                                    }}>
                                        Experience Greenlandic drum dances, storytelling, and local cultural performances in remote coastal settlements.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <style>{`
                    .greenland-seasonal-banner-img:hover {
                        transform: scale(1.03);
                    }
                `}</style>
            </section>

            {/* ── COMMON MISTAKES SLIDER ── */}
            <section
                className="medi-mistakes-slider-section"
                onMouseEnter={() => setIsMediSliderHovered(true)}
                onMouseLeave={() => setIsMediSliderHovered(false)}
            >
                <div className="medi-mistakes-slider-container">
                    <div className="medi-mistakes-slider-header">
                        <span className="medi-mistakes-eyebrow">AVOID EXPEDITION PITFALLS</span>
                        <h2 className="medi-mistakes-slider-title">
                            Common Greenland Cruise Mistakes
                        </h2>
                        <div className="medi-mistakes-slider-separator"></div>
                    </div>

                    <div className="medi-mistakes-carousel-wrapper">
                        <button
                            className="medi-slider-nav-btn btn-left"
                            onClick={() => setMediActiveMistake((prev) => (prev === 0 ? mediMistakes.length - 1 : prev - 1))}
                            aria-label="Previous slide"
                        >
                            <ChevronRight size={24} style={{ transform: 'rotate(180deg)' }} />
                        </button>

                        <div className="medi-slider-card-viewport">
                            {mediMistakes.map((mistake, idx) => {
                                const isActive = mediActiveMistake === idx
                                return (
                                    <div key={idx} className={`medi-mistakes-slider-card ${isActive ? 'active' : ''}`}>
                                        <div className="medi-mistake-slide-header">
                                            <span className="medi-mistake-card-num">0{idx + 1}</span>
                                            <h3 className="medi-mistake-card-title">{mistake.title}</h3>
                                        </div>
                                        <div className="medi-mistake-slide-body">
                                            <p className="medi-mistake-card-description">{mistake.desc}</p>
                                            {mistake.bullets && mistake.bullets.length > 0 && (
                                                <ul className="medi-mistake-card-bullets-list">
                                                    {mistake.bullets.map((bullet, bulletIdx) => (
                                                        <li key={bulletIdx} className="medi-mistake-card-bullet-item">
                                                            <CheckCircle size={16} className="medi-mistake-bullet-check" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <button
                            className="medi-slider-nav-btn btn-right"
                            onClick={() => setMediActiveMistake((prev) => (prev === mediMistakes.length - 1 ? 0 : prev + 1))}
                            aria-label="Next slide"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="medi-slider-progress-dots">
                        {mediMistakes.map((_, idx) => (
                            <button
                                key={idx}
                                className={`medi-slider-dot ${mediActiveMistake === idx ? 'active' : ''}`}
                                onClick={() => setMediActiveMistake(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── WHO SHOULD CHOOSE ── */}
            <section className="medi-audience-section">
                <div className="medi-audience-container">
                    <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Best For / Not Best For</h2>
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>

                    <div className="medi-audience-split-layout">
                        <div className="medi-audience-column medi-best-for-column">
                            <h3 className="medi-audience-column-heading">Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Compass, label: 'Adventure minded luxury travelers' },
                                    { icon: Star, label: 'Wildlife enthusiasts' },
                                    { icon: Camera, label: 'Photography lovers' },
                                    { icon: MapPin, label: 'Travelers seeking remote destinations' },
                                    { icon: Crown, label: 'Experienced cruisers wanting something different' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper best">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="medi-audience-column medi-not-ideal-column">
                            <h3 className="medi-audience-column-heading">Not Best For</h3>
                            <ul className="medi-audience-list">
                                {[
                                    { icon: Music, label: 'Travelers wanting traditional cruise entertainment' },
                                    { icon: Moon, label: 'Guests uncomfortable with flexible schedules' },
                                    { icon: Sun, label: 'Travelers seeking tropical style vacations' },
                                ].map(({ icon: Icon, label }, i) => (
                                    <li key={i}>
                                        <div className="medi-audience-icon-wrapper not-ideal">
                                            <Icon size={20} className="medi-audience-icon" />
                                        </div>
                                        <span>{label}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

             {/* ── VIDEO SHOWCASE ── */}
            <section className="medi-video-section" style={{ background: '#ffffff', padding: '80px 20px', textAlign: 'center' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    
                    <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    
                    <div style={{
                        maxWidth: '900px', margin: '0 auto', borderRadius: '20px', overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15,28,46,0.12)',
                        border: '1px solid rgba(39,68,114,0.1)',
                        aspectRatio: '16/9', background: '#000'
                    }}>
                        <iframe
                            width="100%" height="100%"
                            src="https://www.youtube.com/embed/WrIEeRZxVq8"
                            title="Experience Greenland with HX Expeditions"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            style={{ display: 'block' }}
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* ── ANGELA HUGHES AUTHORITY BOX ── */}
            <section className="medi-authority-section">
                <div className="medi-authority-container">
                    <div className="medi-authority-header-block">
                        <span className="medi-authority-eyebrow">ELITE INDUSTRY LEADERSHIP</span>
                        <h2 className="medi-section-heading" style={{ textAlign: 'center' }}>Why Travelers Trust Angela Hughes & Trips & Ships Luxury Travel</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>

                    <div className="medi-prestige-plaque-wrapper">
                        <div className="medi-prestige-identity-card">
                            <div className="medi-prestige-seal-ring">
                                <img
                                    src={Profile_AH}
                                    alt="Angela Hughes"
                                    style={{
                                        width: '80px', height: '80px', borderRadius: '50%',
                                        objectFit: 'cover', border: '2px solid rgba(255,255,255,0.2)',
                                        animation: 'reverse-spin 30s linear infinite'
                                    }}
                                />
                            </div>
                            <span className="medi-prestige-label">ELITE ADVISOR ACCREDITATION</span>
                            <h3 className="medi-prestige-name">Meet Angela Hughes</h3>
                            <div className="medi-prestige-role-pill">CEO of Trips & Ships Luxury Travel</div>
                            <div className="medi-prestige-meta-box">
                                <div className="medi-prestige-meta-line"></div>
                                <span className="medi-prestige-meta-text">Est. 1986 | Global Authority</span>
                            </div>
                        </div>

                        <div className="medi-prestige-credentials-column">
                            <div className="medi-prestige-list">
                                {[
                                    { text: "CEO of Trips & Ships Luxury Travel", icon: Crown, category: "LEADERSHIP" },
                                    { text: "Founder of Luxury Travel University", icon: GraduationCap, category: "EDUCATION" },
                                    { text: "More than 40 years in the travel industry", icon: Clock, category: "EXPERIENCE" },
                                    { text: "Traveled to more than 121 countries", icon: Globe, category: "EXPLORATION" },
                                    { text: "Global luxury travel speaker and trainer", icon: Mic, category: "SPEAKING" },
                                    { text: "Weekly industry columnist", icon: FileText, category: "MEDIA" },
                                    { text: "Travel Leaders Network Advisory Board member", icon: Users, category: "LEADERSHIP" },
                                    { text: "2024 Luxury Travel Influencer of the Year", icon: Award, category: "HONOR" },
                                    { text: "Named one of the Most Influential Women in Travel in 2026 by TravelPulse", icon: Sparkles, category: "PRESTIGE" },
                                    { text: "Luxury cruise and expedition specialist", icon: Ship, category: "SPECIALTY" },
                                ].map((accolade, idx) => {
                                    const IconComp = accolade.icon
                                    return (
                                        <div key={idx} className="medi-prestige-item-card">
                                            <div className="medi-prestige-item-accent-bar"></div>
                                            <div className="medi-prestige-item-icon-box"><IconComp size={16} /></div>
                                            <div className="medi-prestige-item-content">
                                                <span className="medi-prestige-item-category">{accolade.category}</span>
                                                <h4 className="medi-prestige-item-text">{accolade.text}</h4>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="medi-faq-main-section">
                <div className="medi-faq-container">
                    <div style={{ textAlign: 'center' }}>
                        <h2 className="medi-section-heading">Frequently Asked Questions</h2>
                        <div className="medi-heading-separator-bar medi-bar-centered"></div>
                    </div>
                    <div className="medi-faq-list-wrapper">
                        {mediFaqs.map((faq, index) => (
                            <div key={index} className="medi-faq-individual-item" onClick={() => mediToggleFaq(index)}>
                                <div className="medi-faq-question-row">
                                    <span>{faq.question}</span>
                                    <span className="medi-faq-toggle-icon">{mediActiveFaq === index ? "−" : "+"}</span>
                                </div>
                                {mediActiveFaq === index && (
                                    <p className="medi-faq-answer-text">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="medi-cta-main-section">
                <div className="medi-cta-bg-pattern-layer"></div>
                <div className="medi-cta-content-relative">
                    <div className="medi-cta-inner-wrapper">
                        <h2 className="medi-cta-heading-white">Ready To Explore Greenland With HX Expeditions?</h2>
                        <div className="medi-cta-separator-white"></div>

                        <p className="medi-cta-paragraph-white">
                            Greenland is one of the most fascinating and remote expedition cruise destinations in the world. Choosing the right itinerary, ship and season can dramatically shape your Arctic experience.
                        </p>

                        <p className="medi-cta-paragraph-white" style={{ opacity: 0.95, maxWidth: '800px', margin: '0 auto 24px' }}>
                            Trips & Ships Luxury Travel helps travelers confidently plan unforgettable HX Expeditions Greenland cruises with personalized expert guidance.
                        </p>

                        <div className="medi-cta-considerations-box">
                            <span className="medi-cta-considerations-title">Contact Trips & Ships Luxury Travel today to begin planning your Greenland expedition.</span>
                        </div>

                        <div className="medi-cta-button-group">
                            <button className="medi-primary-cta-button">
                                <Phone size={18} />
                                Schedule a Consultation
                            </button>
                            <button className="medi-secondary-outline-button">
                                <LayoutList size={18} />
                                Request Itinerary Options
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HXExpeditionsGreenland
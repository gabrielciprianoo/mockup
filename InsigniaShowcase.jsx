import { useState } from "react";

// ── Heroicons SVG inline ──────────────────────────────────────────────
const ClipboardDocumentListIcon = ({ size = 28, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none"
    viewBox="0 0 24 24" strokeWidth={1.8} stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
  </svg>
);

const CurrencyDollarIcon = ({ size = 28, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none"
    viewBox="0 0 24 24" strokeWidth={1.8} stroke={color}>
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

// ── Octagon clip-path ─────────────────────────────────────────────────
// clip-path polygon for a regular octagon
const OCTAGON_CLIP = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";

// ── Insignia data ─────────────────────────────────────────────────────
const INSIGNIAS = [
  {
    id: "RECEPCIONISTA",
    label: "Recepcionista",
    icon: ClipboardDocumentListIcon,
    // warm brick-red palette
    bg: "linear-gradient(145deg, #e8584a 0%, #c0392b 60%, #96261b 100%)",
    shadow: "rgba(192,57,43,0.55)",
    shimmer: "rgba(255,255,255,0.18)",
    textColor: "#fff",
    borderLight: "rgba(255,255,255,0.30)",
    borderDark: "rgba(100,20,10,0.40)",
    glowColor: "rgba(232,88,74,0.5)",
  },
  {
    id: "CAJA",
    label: "Caja",
    icon: CurrencyDollarIcon,
    // warm amber-gold palette
    bg: "linear-gradient(145deg, #f0a500 0%, #c97d00 60%, #9a5e00 100%)",
    shadow: "rgba(201,125,0,0.55)",
    shimmer: "rgba(255,255,255,0.20)",
    textColor: "#fff",
    borderLight: "rgba(255,240,180,0.35)",
    borderDark: "rgba(80,40,0,0.35)",
    glowColor: "rgba(240,165,0,0.5)",
  },
];

// ── Single Insignia Badge ─────────────────────────────────────────────
function InsigniaBadge({ insignia, size = "md", active = true }) {
  const [hovered, setHovered] = useState(false);

  const dims = {
    sm: { outer: 56, inner: 48, iconSize: 20, fontSize: "0.6rem", gap: 6 },
    md: { outer: 80, inner: 68, iconSize: 30, fontSize: "0.72rem", gap: 10 },
    lg: { outer: 110, inner: 94, iconSize: 40, fontSize: "0.85rem", gap: 14 },
  }[size];

  const { outer, inner, iconSize, fontSize, gap } = dims;

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap,
      opacity: active ? 1 : 0.38,
      filter: active ? "none" : "grayscale(1)",
      transition: "opacity 0.3s, filter 0.3s",
      cursor: active ? "pointer" : "default",
    }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Outer glow ring */}
      <div style={{
        position: "relative",
        width: outer,
        height: outer,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.25s cubic-bezier(.34,1.56,.64,1)",
        transform: hovered ? "scale(1.08)" : "scale(1)",
      }}>

        {/* Glow behind */}
        <div style={{
          position: "absolute",
          inset: -4,
          clipPath: OCTAGON_CLIP,
          background: insignia.glowColor,
          filter: "blur(10px)",
          opacity: hovered ? 1 : 0.5,
          transition: "opacity 0.3s",
          zIndex: 0,
        }} />

        {/* Bevel border layer (slightly larger) */}
        <div style={{
          position: "absolute",
          width: outer,
          height: outer,
          clipPath: OCTAGON_CLIP,
          background: `linear-gradient(145deg, ${insignia.borderLight}, ${insignia.borderDark})`,
          zIndex: 1,
        }} />

        {/* Main octagon body */}
        <div style={{
          position: "absolute",
          width: inner,
          height: inner,
          clipPath: OCTAGON_CLIP,
          background: insignia.bg,
          boxShadow: `
            inset 0 2px 4px ${insignia.shimmer},
            inset 0 -2px 4px rgba(0,0,0,0.25),
            0 6px 20px ${insignia.shadow}
          `,
          zIndex: 2,
          overflow: "hidden",
        }}>
          {/* Shimmer highlight top */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "45%",
            background: `linear-gradient(180deg, ${insignia.shimmer} 0%, transparent 100%)`,
            clipPath: OCTAGON_CLIP,
            zIndex: 3,
          }} />
        </div>

        {/* Icon centered on top */}
        <div style={{
          position: "relative",
          zIndex: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))",
        }}>
          <insignia.icon size={iconSize} color={insignia.textColor} />
        </div>
      </div>

      {/* Label */}
      <span style={{
        fontFamily: "'DM Sans', 'Nunito', sans-serif",
        fontSize,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: active ? "#3a2a22" : "#999",
        transition: "color 0.3s",
        textAlign: "center",
        lineHeight: 1.2,
      }}>
        {insignia.label}
      </span>
    </div>
  );
}

// ── Comparison panel ──────────────────────────────────────────────────
function UserPanel({ name, role, insignias, highlight }) {
  return (
    <div style={{
      background: highlight
        ? "linear-gradient(160deg, #fff8f0 0%, #fff3e8 100%)"
        : "linear-gradient(160deg, #fff9f8 0%, #fff4f3 100%)",
      borderRadius: 20,
      padding: "28px 32px",
      border: highlight
        ? "2px solid rgba(240,165,0,0.35)"
        : "2px solid rgba(192,57,43,0.2)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      minWidth: 280,
      flex: 1,
      position: "relative",
      overflow: "hidden",
    }}>

      {/* Subtle pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.025,
        backgroundImage: "radial-gradient(circle, #333 1px, transparent 1px)",
        backgroundSize: "20px 20px",
        pointerEvents: "none",
      }} />

      {/* Role chip */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: "#f0f0f0", borderRadius: 20,
        padding: "4px 12px", marginBottom: 16,
        fontSize: "0.7rem", fontWeight: 700,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: "#666", fontFamily: "'DM Sans', sans-serif",
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "#60a917", display: "inline-block",
        }} />
        Rol Base: {role}
      </div>

      {/* Name */}
      <h3 style={{
        margin: "0 0 6px",
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: "1.4rem", fontWeight: 400,
        color: "#2a1a14", letterSpacing: "-0.01em",
      }}>{name}</h3>

      <p style={{
        margin: "0 0 24px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "0.82rem", color: "#888",
      }}>
        {insignias.length} {insignias.length === 1 ? "insignia activa" : "insignias activas"}
      </p>

      {/* Insignias */}
      <div style={{
        display: "flex", gap: 24, flexWrap: "wrap",
        alignItems: "flex-start",
      }}>
        {INSIGNIAS.map(ins => (
          <InsigniaBadge
            key={ins.id}
            insignia={ins}
            size="md"
            active={insignias.includes(ins.id)}
          />
        ))}
      </div>

      {/* Commands count */}
      <div style={{
        marginTop: 24, paddingTop: 18,
        borderTop: "1px solid rgba(0,0,0,0.07)",
        display: "flex", gap: 16, flexWrap: "wrap",
      }}>
        {insignias.map(insId => {
          const ins = INSIGNIAS.find(i => i.id === insId);
          const count = insId === "RECEPCIONISTA" ? 6 : 2;
          return (
            <div key={insId} style={{
              display: "flex", alignItems: "center", gap: 7,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem", color: "#555",
            }}>
              <div style={{
                width: 10, height: 10,
                clipPath: OCTAGON_CLIP,
                background: ins.bg,
                flexShrink: 0,
              }} />
              <span style={{ fontWeight: 600 }}>{ins.label}:</span>
              <span>{count} comandos</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Size showcase row ─────────────────────────────────────────────────
function SizeRow() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #2a1a14 0%, #1a0e09 100%)",
      borderRadius: 20, padding: "28px 36px",
      display: "flex", alignItems: "center",
      justifyContent: "space-around", flexWrap: "wrap", gap: 32,
      boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
    }}>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
          color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em",
          textTransform: "uppercase", marginBottom: 16 }}>Tamaño SM</p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center" }}>
          {INSIGNIAS.map(ins => <InsigniaBadge key={ins.id} insignia={ins} size="sm" />)}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
          color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em",
          textTransform: "uppercase", marginBottom: 16 }}>Tamaño MD (Header)</p>
        <div style={{ display: "flex", gap: 24, justifyContent: "center" }}>
          {INSIGNIAS.map(ins => <InsigniaBadge key={ins.id} insignia={ins} size="md" />)}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem",
          color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em",
          textTransform: "uppercase", marginBottom: 16 }}>Tamaño LG (Perfil)</p>
        <div style={{ display: "flex", gap: 28, justifyContent: "center" }}>
          {INSIGNIAS.map(ins => <InsigniaBadge key={ins.id} insignia={ins} size="lg" />)}
        </div>
      </div>
    </div>
  );
}

// ── Main export ───────────────────────────────────────────────────────
export default function InsigniaShowcase() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #f7f0ee 0%, #ede3df 100%)",
      padding: "48px 32px",
      fontFamily: "'DM Sans', 'Nunito', sans-serif",
    }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      {/* Header */}
      <div style={{ maxWidth: 900, margin: "0 auto 48px" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem", fontWeight: 700,
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "#ae4132", marginBottom: 8,
        }}>
          Sistema de Roles · Taller de Transmisiones
        </p>
        <h1 style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: "2.4rem", fontWeight: 400,
          color: "#2a1a14", margin: "0 0 12px",
          letterSpacing: "-0.02em",
        }}>
          Diseño de Insignias
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem", color: "#888", maxWidth: 520,
        }}>
          Componente de insignia con octágono, relieve 3D y Heroicons.
          Pasa el cursor para ver la interacción.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", flexDirection: "column", gap: 32 }}>

        {/* Sizes on dark background */}
        <SizeRow />

        {/* Two user comparison */}
        <div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#999", marginBottom: 16,
          }}>
            Comparación de perfiles
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            <UserPanel
              name="Ana González"
              role="Usuario"
              insignias={["RECEPCIONISTA"]}
              highlight={false}
            />
            <UserPanel
              name="Carlos Mendoza"
              role="Usuario"
              insignias={["RECEPCIONISTA", "CAJA"]}
              highlight={true}
            />
          </div>
        </div>

        {/* Inactive state demo */}
        <div style={{
          background: "#fff",
          borderRadius: 20,
          padding: "28px 32px",
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.75rem", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#999", marginBottom: 20,
          }}>
            Estado inactivo (insignia no asignada)
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            <InsigniaBadge insignia={INSIGNIAS[0]} size="md" active={true} />
            <InsigniaBadge insignia={INSIGNIAS[1]} size="md" active={false} />
          </div>
          <p style={{
            marginTop: 16,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.8rem", color: "#aaa",
          }}>
            Las insignias no asignadas aparecen en gris — útil para mostrar
            qué capacidades puede adquirir el usuario.
          </p>
        </div>

      </div>
    </div>
  );
}

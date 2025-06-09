import React, { useState } from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("Insert");
  const [searchTerm, setSearchTerm] = useState("");
  const [collapsedSections] = useState({
    Layout: true,
    Media: true,
    Forms: true,
    Code: true,
    "Import options": true,
    "My Templates": true,
    "My Symbols": true,
    "Featured Templates": true,
  });

  const tabs = ["Insert", "Options", "Layers", "Data", "AI"];

  const basicComponents = [
    "Text",
    "Image",
    "Button",
    "Columns",
    "Box",
    "Section",
  ];

  return (
    <div className={styles.leftSidebar}>
      {/* Tab navigation */}
      <div className={styles.tabNavigation}>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : styles.tabInactive}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className={styles.searchBarContainer}>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      {/* Component sections */}
      <div className={styles.componentSections}>
        {/* Import section */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Import</span>
          </div>
          <div className={styles.importButtons}>
            <button className={styles.importButton}>
              <span className={styles.importIcon}>📁</span>
              <span>Import from Figma</span>
            </button>
            <button className={styles.importButton}>
              <span className={styles.importIcon}>⬆</span>
              <span>Upload file</span>
            </button>
          </div>
        </div>

        {/* Basic components */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Basics</span>
          </div>
          <div className={styles.componentGrid}>
            {basicComponents.map((component) => (
              <div key={component} className={styles.componentItem}>
                <div className={styles.componentIcon}>📄</div>
                <span className={styles.componentName}>{component}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Components */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTitle}>Custom Components</span>
          </div>
          <div className={styles.promoCard}>
            <div className={styles.promoImage}>🎨</div>
            <div className={styles.promoText}>
              Visually build with your components
            </div>
            <button className={styles.promoButton}>Add a Component</button>
          </div>
        </div>

        {/* Collapsed sections */}
        {Object.entries(collapsedSections).map(([sectionName, isCollapsed]) => (
          <div key={sectionName} className={styles.section}>
            <button
              className={styles.sectionHeader}
            >
              <span className={styles.sectionTitle}>{sectionName}</span>
              <span className={styles.collapseIcon}>
                {isCollapsed ? "▶" : "▼"}
              </span>
            </button>
            {!isCollapsed && (
              <div className={styles.sectionContent}>
                <div className={styles.emptySection}>No items available</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

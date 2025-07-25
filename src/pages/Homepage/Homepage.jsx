import React, { useState } from "react";
import HomeGroupSection from "./component/HomeGroupSection";
import HomeRankingSection from "./component/HomeRankingSection";
import HomeStoreSection from "./component/HomeStoreSection";
import HomeCardSection from "./component/HomeCardSection";
import FloatingActionButton from "./component/FloatingActionButton";
import ActionMenu from "./component/ActionMenu";
import Header from "./component/Header";

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleFloatingButtonClick = () => {
    console.log("플로팅 버튼 클릭 - 메뉴 토글");
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    console.log("액션 메뉴 닫기");
    setMenuOpen(false);
  };

  return (
    <div>
      <Header />
      <HomeGroupSection />
      <HomeRankingSection />
      <HomeStoreSection />
      <HomeCardSection />

      <FloatingActionButton
        onClick={handleFloatingButtonClick}
        isOpen={menuOpen}
      />

      {menuOpen && <ActionMenu onClose={handleMenuClose} />}

      {/* 스크롤 테스트용 더미 데이터
      <div
        style={{
          height: 400,
          background: "#e5e7eb",
          margin: "32px 0",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          color: "#333",
        }}
      >
        스크롤 테스트용 더미 데이터 (400px)
      </div> */}
    </div>
  );
}

export default Homepage;

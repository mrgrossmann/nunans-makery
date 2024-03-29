//components/DashboardLayout/index.tsx
import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
// import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "../DashboardLayout/styles";

type DashboardLayoutProps = {
  children: React.ReactNode,
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
//  const [isOpened, setOpened] = useState(false);

//  const toggleDrawer = () => {
//    setOpened((prev) => !prev);
//  };

// <Sidebar isOpened={isOpened} />
// isOpened={isOpened} toggleDrawer={toggleDrawer} 
  return (
    <Container>
      <Header/>
      <Content>
        <PageContainer>{children}</PageContainer>
      </Content>

    </Container>
  );
}
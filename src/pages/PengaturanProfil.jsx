"use client"
import { useState } from "react"
import Pengaturan from '@/app/profil/pengaturan/page';
import KursusSaya from '@/app/profil/kursus/page';

export default function Profil() {
  const [activeTab, setActiveTab] = useState('kursus-saya');

  const handleTabChange = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  return (
    <main>
      <div className="container pb-5 h-100">
        <div className="container mt-5 mb-5">
          <div className="row justify-content-evenly">
            <div className="col-md-3">
                <section id="content">
                <div className="container">
                  <div className="row gap-5">
                    <div className="col">
                      <NavbarProfil></NavbarProfil>
                    </div>
                  </div>
                </div>
                </section>
      <div className="col-md-9">
            <section id="content">
				      <div className="container">
					      <div className="row gap-5">
						      <div className="col-lg-9">
							        <Pengaturan></Pengaturan>
                    </div>
                  </div>
                </div>  
			</section>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

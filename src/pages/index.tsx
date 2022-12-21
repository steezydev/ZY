import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />

      <main>
        <section className='backdrop-blur-sm md:backdrop-blur-none'>
          <div className='min-h-screen pt-28'>
            <div className='layout mt-12 flex flex-col items-center pb-16'>
              <div className='text-glow font-display text-[12rem] font-bold leading-[10rem] text-white'>
                ZY
              </div>
              <div className='mt-24 flex max-w-[55rem] flex-col gap-16'>
                <div className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
                  erat rhoncus, sollicitudin purus ac, tristique lorem.
                  Phasellus a tincidunt turpis, ac faucibus lacus. Aliquam non
                  convallis nunc. Vestibulum scelerisque nibh urna, sed
                  imperdiet urna convallis et. Etiam pharetra pellentesque eros
                  tincidunt pellentesque.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

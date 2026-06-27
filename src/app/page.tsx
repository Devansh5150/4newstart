import House from '@/components/House';
import Window from '@/components/Window';
import Door from '@/components/Door';
import AdvertisementBoard from '@/components/AdvertisementBoard';
import LeftSideSigns from '@/components/LeftSideSigns';
import { Award, BookOpen, Briefcase, Code2 } from 'lucide-react';

export default function Home() {
  return (
    <House>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 mt-12 md:mt-20 px-4">

        {/* Top Left: Achievement */}
        <div className="flex justify-center">
          <Window title="Achievement">
            <Award className="w-16 h-16 text-amber-500 mb-4 drop-shadow-md" />
            <h3 className="font-serif text-xl text-cream-200">Awards & Honors</h3>
            <p className="text-stone-400 text-sm mt-2 text-center px-4">Golden trophies and certificates on wooden shelves.</p>
          </Window>
        </div>

        {/* Top Center: Education */}
        <div className="flex justify-center mt-0 md:-mt-12 lg:-mt-0">
          <Window title="Education">
            <BookOpen className="w-16 h-16 text-amber-500 mb-4 drop-shadow-md" />
            <h3 className="font-serif text-xl text-cream-200">Academics</h3>
            <p className="text-stone-400 text-sm mt-2 text-center px-4">Study desk, globe, and reading lamp.</p>
          </Window>
        </div>

        {/* Top Right: Experience */}
        <div className="flex justify-center">
          <Window title="Experience & Projects">
            <Briefcase className="w-16 h-16 text-amber-500 mb-4 drop-shadow-md" />
            <h3 className="font-serif text-xl text-cream-200">Work</h3>
            <p className="text-stone-400 text-sm mt-2 text-center px-4">Developer workspace, laptop, and coffee mug.</p>
          </Window>
        </div>

        {/* Bottom Left / Side Signs: What I Build & Left Side Details */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-12">
          <div className="hidden xl:block -ml-16 mr-8">
            <LeftSideSigns />
          </div>
          <div className="flex justify-center mt-12">
            <Window title="What I Build">
              <Code2 className="w-16 h-16 text-amber-500 mb-4 drop-shadow-md" />
              <h3 className="font-serif text-xl text-cream-200">Engineering</h3>
              <p className="text-stone-400 text-sm mt-2 text-center px-4">Blueprints and interactive code snippets.</p>
            </Window>
          </div>
          {/* Mobile/Tablet fallback for left signs */}
          <div className="block xl:hidden mt-8 mb-12">
            <LeftSideSigns />
          </div>
        </div>

        {/* Center: Door */}
        <div className="flex justify-center items-end mt-12 md:mt-0 lg:mt-12 lg:row-start-2 lg:col-start-2">
          <Door />
        </div>

        {/* Bottom Right: Advertisement Board */}
        <div className="flex justify-center items-center lg:row-start-2 lg:col-start-3 lg:mt-16 xl:ml-12">
          <AdvertisementBoard />
        </div>

      </div>
    </House>
  );
}

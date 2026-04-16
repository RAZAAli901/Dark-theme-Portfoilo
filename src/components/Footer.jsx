export default function Footer() {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 border-t border-white/10 shadow-lg p-6 md:p-[15px] z-20 relative">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-around flex-wrap gap-10 md:gap-0">
          
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px]">Community</h3>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="https://youtube.com/@jeimen_editzzz">
                <span className="text-[15px] ml-[6px]">YouTube</span>
            </a>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="https://github.com/JeimeenChaudhari">
                <span className="text-[15px] ml-[6px]">GitHub</span>
            </a>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="https://discord.gg/v5rthNq8hr">
                <span className="text-[15px] ml-[6px]">Discord</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px]">Social Media</h3>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="https://instagram.com/jeimeen_Editzzz">
                <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="https://x.com/Jeimeen3031">
                <span className="text-[15px] ml-[6px]">Twitter</span>
            </a>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="https://www.linkedin.com/in/jeimeen-chaudhari-3a680028b/">
                <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <h3 className="font-bold text-[16px]">About</h3>
            <a target="_blank" rel="noreferrer noopener" className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="mailto:jeimeen3001@gmail.com">
                <span className="text-[15px] ml-[6px]">Portfolio Feedback</span>
            </a>
            <a className="flex flex-row items-center my-[15px] hover:text-purple-400 transition" href="#about-me">
                <span className="text-[15px] ml-[6px]">About Me</span>
            </a>
            <p className="flex flex-row items-center my-[15px]">
                <span className="text-[15px] ml-[6px]">jeimeen3001@gmail.com</span>
            </p>
          </div>

        </div>
        <div className="mt-[20px] text-[15px] text-center w-full">
            © {new Date().getFullYear()} Jeimeen Chaudhari. All rights reserved.
        </div>
      </div>
    </div>
  );
}

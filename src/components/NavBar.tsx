// components/ui/NavbarBaypass.tsx
"use client";

export default function NavbarBaypass() {

    return (
        <header className="fixed top-0 left-0 z-10 w-full px-8 py-6 transition-colors duration-300"
                style={{backgroundColor: 'transparent'}}>
            <nav className="flex items-center justify-between text-white" id={'nav'}>
                <div className="text-lg font-semibold whitespace-nowrap">BayPass at SJSU</div>
                <ul className="flex gap-8 text-sm font-medium">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Petition</a></li>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                </ul>
            </nav>
            <script>
                {`
                window.addEventListener('scroll', () => {
                    const header = document.querySelector('header');
                    const nav = document.getElementById('nav');
                    if (window.scrollY > 0) {
                        header.style.backgroundColor = 'white';
                        header.style.color = 'black';
                        nav.style.color = 'black';
                        
                    } else {
                        header.style.backgroundColor = 'transparent';
                        header.style.color = 'white';
                        nav.style.color = 'white';
                    }
                });
                `}
            </script>
        </header>
    );
}

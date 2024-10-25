// theme.ts
import { Theme } from 'theme-ui';

// Define custom types for navigation and RGBType
export type NavigationItem = {
    label: string;
    href: string;
};

export type RGBType = `${string}, ${string}, ${string}`;

// Define the extended Theme type
export interface CustomTheme extends Theme {
    strings: {
        currentBid?: string;
        auctionEndsIn?: string;
        placeBid?: string;
        highestBidder?: string;
        connectWallet?: string;
        wrongNetwork?: string;
    };
    brand: {
        logo?: string | null;
        title?: string | null;
    };
    nav: {
        primary: NavigationItem[];
        secondary: NavigationItem[];
    };
    // Add more custom fields if needed
}

// Define the theme object
const theme: CustomTheme = {
    colors: {
        fill: '255, 255, 255',
        muted: '200, 200, 200',
        stroke: '150, 150, 150',
        backdrop: '0, 0, 0',
        'text-base': '0, 0, 0',
        'text-muted': '100, 100, 100',
        'text-inverted': '255, 255, 255',
        'text-highlighted': '0, 0, 255',
        'button-accent': '14, 118, 253',
        'button-accent-hover': '10, 80, 200',
        'button-muted': '150, 150, 150',
        'proposal-success': '0, 255, 0',
        'proposal-danger': '255, 0, 0',
        'proposal-muted': '150, 150, 150',
        'proposal-highlighted': '255, 215, 0',
        background: '255, 255, 255',
        text: '0, 0, 0',
        primary: '#0E76FD',
        secondary: '#FF4081',
    },
    fonts: {
        heading: 'system-ui, sans-serif',
        body: 'Georgia, serif',
    },
    fontSizes: [12, 14, 16, 18, 20, 24, 32, 48],
    fontWeights: {
        body: 400,
        heading: 700,
    },
    lineHeights: {
        body: 1.5,
        heading: 1.25,
    },
    strings: {
        currentBid: 'Current Bid',
        auctionEndsIn: 'Auction Ends In',
        placeBid: 'Place Bid',
        highestBidder: 'Highest Bidder',
        connectWallet: 'Connect Wallet',
        wrongNetwork: 'Wrong Network',
    },
    brand: {
        logo: '/path-to-your-logo.png',
        title: 'Your Brand Title',
    },
    nav: {
        primary: [
            { label: 'Home', href: '/' },
            { label: 'Explore', href: '/explore' },
            { label: 'About', href: '/about' },
        ],
        secondary: [
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms of Service', href: '/terms' },
        ],
    },
    styles: {
        root: {
            fontFamily: 'body',
            lineHeight: 'body',
            fontWeight: 'body',
        },
        h1: {
            fontSize: 5,
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        h2: {
            fontSize: 4,
            fontFamily: 'heading',
            fontWeight: 'heading',
            lineHeight: 'heading',
        },
        p: {
            fontSize: 2,
            fontFamily: 'body',
            lineHeight: 'body',
        },
    },
};

export default theme;
export type { CustomTheme };  // Export CustomTheme

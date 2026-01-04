import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

export const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#F3F4F6',   // light background
            100: '#E5E7EB',
            200: '#D1D5DB',
            300: '#6B7280',   // neutral gray
            400: '#0C3760',   // dark blue shade
            500: '#19B0CE',   // main cyan
            600: '#159AB6',
            700: '#107C94',
            800: '#0C5E72',
            900: '#0C3760',   // dark primary
            950: '#081F36'    // darkest
        },
        surface: {
            0: '#FFFFFF',    // white surface
            50: '#F3F4F6',   // light gray
            100: '#E5E7EB',  // subtle borders
            200: '#D1D5DB',
            300: '#6B7280',  // text surface
            400: '#4B5563',
            500: '#374151',
            600: '#1F2937',
            700: '#111827',
            800: '#0C3760',  // dark surface
            900: '#081F36'
        }
    },
    primitive: {
        fontFamily: {
            sans: '"Be Vietnam Pro", sans-serif'
        }
    }
});

// gameData.ts - VERSÃO FINAL COM MELHOR DIFICULDADE
export interface ImageItem {
  id: string;
  url: string;
  type: 'real' | 'ai';
  category: 'landscape' | 'portrait';
  difficulty: 'hard';
}

export const GAME_IMAGES_FINAL: ImageItem[] = [
  // ===============================================
  // IMAGENS REAIS (Pexels - Fotos Autênticas)
  // ===============================================
  {
    id: 'real_1',
    url: 'https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg',
    type: 'real',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'real_2',
    url: 'https://images.pexels.com/photos/34950/pexels-photo.jpg',
    type: 'real',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'real_3',
    url: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg',
    type: 'real',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'real_4',
    url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg',
    type: 'real',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'real_5',
    url: 'https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg',
    type: 'real',
    category: 'landscape',
    difficulty: 'hard'
  },

  // ===============================================
  // IMAGENS GERADAS POR IA - FOTORREALISTAS
  // (Lexica - Aperture v3.5 - QUALIDADE PROFISSIONAL)
  // ===============================================
  {
    id: 'ai_1',
    url: 'https://image.lexica.art/full_webp/b0723d6d-cbcf-460b-a7a2-27638b1903b2',
    type: 'ai',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'ai_2',
    url: 'https://image.lexica.art/full_webp/05ae0f09-bed4-4322-a8d5-a94f0529b96e',
    type: 'ai',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'ai_3',
    url: 'https://image.lexica.art/full_webp/53592826-afa1-43ed-a194-455a65dc73c5',
    type: 'ai',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'ai_4',
    url: 'https://image.lexica.art/full_webp/2bedda0b-4937-4b31-aadb-1005c1df9f85',
    type: 'ai',
    category: 'landscape',
    difficulty: 'hard'
  },
  {
    id: 'ai_5',
    url: 'https://image.lexica.art/full_webp/4663e006-9482-4cd0-a8a9-4f8892041d64',
    type: 'ai',
    category: 'landscape',
    difficulty: 'hard'
  }
];

// Embaralhador de array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Gerador de questões FASE 1
export function generatePhase1Questions(count: number = 5) {
  const shuffled = shuffleArray(GAME_IMAGES_FINAL);
  return shuffled.slice(0, count).map((image, index) => ({
    id: `phase1_${index}`,
    image,
    correctAnswer: image.type === 'ai' ? 'ai' : 'real'
  }));
}

// Gerador de questões FASE 2
export function generatePhase2Questions(count: number = 5) {
  const questions = [];
  const shuffled = shuffleArray(GAME_IMAGES_FINAL);

  for (let i = 0; i < count; i++) {
    const image1 = shuffled[i];
    
    // Pega uma imagem de tipo diferente
    let image2 = shuffled.find((img, idx) => 
      img.type !== image1.type && idx !== i
    );
    
    if (!image2) {
      image2 = shuffled[(i + 1) % shuffled.length];
    }

    // Embaralha posição
    const [left, right] = Math.random() > 0.5 
      ? [image1, image2] 
      : [image2, image1];

    questions.push({
      id: `phase2_${i}`,
      left,
      right,
      correctAnswer: left.type === 'ai' ? 'left' : 'right'
    });
  }

  return questions;
}

import { profiles } from '../data/profiles';

interface UserSelections {
  objective: string;
  interests: string[];
  sector: string;
  budget: string;
}

interface MatchedProfile {
  profile: typeof profiles[0];
  score: number;
  matchReasons: string[];
  budgetMatch: boolean;
}

const WEIGHTS = {
  interests: 0.35,
  sector: 0.25,
  objective: 0.20,
  budget: 0.20,
};

const getBudgetValue = (budgetString: string): number => {
  return parseInt(budgetString.split(' ')[0], 10);
};

export function findMatchingProfiles(selections: UserSelections): MatchedProfile[] {
  return profiles
    .map(profile => {
      const matchReasons: string[] = [];
      let score = 0;

      // Match interests (35% weight)
      const interestMatches = selections.interests.filter(interest => 
        profile.tags.some(tag => tag.toLowerCase().includes(interest.toLowerCase()))
      );
      if (interestMatches.length > 0) {
        score += (interestMatches.length / selections.interests.length) * WEIGHTS.interests;
        matchReasons.push(`Coincide con ${interestMatches.length} de tus intereses`);
      }

      // Match sector (25% weight)
      if (profile.tags.some(tag => tag.toLowerCase().includes(selections.sector.toLowerCase()))) {
        score += WEIGHTS.sector;
        matchReasons.push(`Trabaja en el sector ${selections.sector}`);
      }

      // Match objective (20% weight)
      const objectiveMap = {
        'Propuesta de negocio': ['Business Angel', 'Emprendimiento', 'Negocios'],
        'Consultoría o asesoramiento': ['Consultoría', 'Coaching', 'Asesor'],
        'Networking': ['comunicación', 'Eventos', 'Networking'],
        'Entrevista o colaboración': ['Periodismo', 'Radio', 'Televisión'],
        'Mensaje personal': ['Influencers', 'comunicación'],
        'Evento o conferencia': ['Speakers', 'Eventos', 'Presentador']
      };

      const relevantTags = objectiveMap[selections.objective] || [];
      if (profile.tags.some(tag => relevantTags.includes(tag))) {
        score += WEIGHTS.objective;
        matchReasons.push(`Ideal para ${selections.objective}`);
      }

      // Match budget (20% weight)
      const userBudget = getBudgetValue(selections.budget);
      const budgetMatch = profile.tempos <= userBudget;
      if (budgetMatch) {
        score += WEIGHTS.budget;
        matchReasons.push(`Dentro de tu presupuesto (${profile.tempos} Tempos)`);
      }

      return {
        profile,
        score,
        matchReasons,
        budgetMatch
      };
    })
    .filter(match => match.score > 0 && match.budgetMatch)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
}
import { Process, ValueTheme, AgenticPattern } from './types';
import telecomProcessesData from '@/data/telecomProcesses.json';
import mediaProcessesData from '@/data/mediaProcesses.json';
import valueThemesData from '@/data/valueThemes.json';
import agenticPatternsData from '@/data/agenticPatterns.json';

// Type assertions for imported JSON
const telecomProcesses = telecomProcessesData as Process[];
const mediaProcesses = mediaProcessesData as Process[];
const valueThemes = valueThemesData as ValueTheme[];
const agenticPatterns = agenticPatternsData as AgenticPattern[];

export function getAllProcesses(industry?: 'telecom' | 'media'): Process[] {
  if (industry === 'media') {
    return mediaProcesses;
  }
  if (industry === 'telecom') {
    return telecomProcesses;
  }
  return [...telecomProcesses, ...mediaProcesses];
}

export function getProcessById(id: string, industry?: 'telecom' | 'media'): Process | undefined {
  if (industry === 'media') {
    return mediaProcesses.find(p => p.id === id);
  }
  if (industry === 'telecom') {
    return telecomProcesses.find(p => p.id === id);
  }
  // Search both if industry not specified
  return [...telecomProcesses, ...mediaProcesses].find(p => p.id === id);
}

export function getProcessesByCategory(category?: Process['category'], industry?: 'telecom' | 'media'): Process[] {
  const processes = getAllProcesses(industry);
  if (!category) {
    return processes;
  }
  return processes.filter(p => p.category === category);
}

export function getAllValueThemes(): ValueTheme[] {
  return valueThemes;
}

export function getValueThemeById(id: string): ValueTheme | undefined {
  return valueThemes.find(vt => vt.id === id);
}

export function getAllAgenticPatterns(): AgenticPattern[] {
  return agenticPatterns;
}

export function getAgenticPatternById(id: string): AgenticPattern | undefined {
  return agenticPatterns.find(ap => ap.id === id);
}

export function getNextProcessId(currentId: string, industry?: 'telecom' | 'media'): string | null {
  const allProcesses = getAllProcesses(industry);
  const currentIndex = allProcesses.findIndex(p => p.id === currentId);
  if (currentIndex === -1 || currentIndex === allProcesses.length - 1) {
    return null;
  }
  return allProcesses[currentIndex + 1].id;
}

export function getPreviousProcessId(currentId: string, industry?: 'telecom' | 'media'): string | null {
  const allProcesses = getAllProcesses(industry);
  const currentIndex = allProcesses.findIndex(p => p.id === currentId);
  if (currentIndex === -1 || currentIndex === 0) {
    return null;
  }
  return allProcesses[currentIndex - 1].id;
}

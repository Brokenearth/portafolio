import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { getPortfolioData } from '../src/data/portfolio';
import { UniSportArchitectureInspector } from '../src/components/interactive/UniSportArchitectureInspector';
import { AutomataPipelinePreview } from '../src/components/interactive/AutomataPipelinePreview';
import { CopyEmailButton } from '../src/components/interactive/CopyEmailButton';
import { MailtoButton } from '../src/components/interactive/MailtoButton';

describe('Interactive islands', () => {
  it('UniSportArchitectureInspector renders all 6 nodes and updates technical panel on click', () => {
    const data = getPortfolioData('es').uniSport;
    render(<UniSportArchitectureInspector caseStudy={data} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
    expect(buttons[0]).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByTestId('unisport-topology-svg')).toBeInTheDocument();

    const reservationsNode = screen.getByRole('button', { name: /Reservations/i });
    fireEvent.click(reservationsNode);

    expect(reservationsNode).toHaveAttribute('aria-pressed', 'true');
    expect(buttons[0]).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText(data.nodes[4].summary)).toBeInTheDocument();
    expect(screen.getAllByText(/reservations\.reservations/i).length).toBeGreaterThanOrEqual(2);
  });

  it('AutomataPipelinePreview switches between rural contract samples and updates ambiguity alerts', () => {
    const data = getPortfolioData('es').contractsProject;
    render(<AutomataPipelinePreview project={data} />);

    const sampleButtons = screen.getAllByRole('button');
    expect(sampleButtons).toHaveLength(3);
    expect(sampleButtons[0]).toHaveAttribute('aria-pressed', 'true');

    fireEvent.click(sampleButtons[1]);
    expect(sampleButtons[1]).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText(data.samples[1].pdaStackResult)).toBeInTheDocument();
    expect(screen.getByText(data.samples[1].warnings[0])).toBeInTheDocument();
  });

  it('CopyEmailButton copies email to clipboard and announces confirmation', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, {
      clipboard: { writeText },
    });

    render(
      <CopyEmailButton
        emailUser="johanhernandez064"
        emailDomain="gmail.com"
        label="Copiar correo"
        copiedLabel="Correo copiado"
      />
    );

    const btn = screen.getByRole('button', { name: /Copiar correo/i });
    fireEvent.click(btn);

    expect(writeText).toHaveBeenCalledWith('johanhernandez064@gmail.com');
    expect(await screen.findByRole('status')).toHaveTextContent('Correo copiado');
  });

  it('MailtoButton dispatches mailto URI on click without rendering a raw mailto link', () => {
    const onNavigate = vi.fn();

    render(
      <MailtoButton
        emailUser="johanhernandez064"
        emailDomain="gmail.com"
        label="Enviar correo"
        onNavigate={onNavigate}
      />
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    const btn = screen.getByRole('button', { name: /Enviar correo/i });
    fireEvent.click(btn);
    expect(onNavigate).toHaveBeenCalledWith('mailto:johanhernandez064@gmail.com');
  });
});

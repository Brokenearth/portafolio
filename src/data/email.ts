export interface SplitEmailParts {
  user: string;
  domain: string;
}

export function splitEmail(email: string): SplitEmailParts {
  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    return { user: email, domain: '' };
  }
  return {
    user: email.slice(0, atIndex),
    domain: email.slice(atIndex + 1),
  };
}

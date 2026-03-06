import { Operator, OperatorContext } from './types';

export class OperatorRegistry {
  private operators = new Map<string, Operator>();

  registerOperator(op: Operator) {
    this.operators.set(op.id, op);
  }

  getOperator(id: string): Operator | undefined {
    return this.operators.get(id);
  }

  getAll(): Operator[] {
    return Array.from(this.operators.values());
  }

  listVisible(ctx: OperatorContext): Operator[] {
    return this.getAll().filter((op) => (op.visible ? op.visible(ctx) : true));
  }

  runOperator(id: string, ctx: OperatorContext, args?: any) {
    const op = this.getOperator(id);
    if (!op) return false;
    const visible = op.visible ? op.visible(ctx) : true;
    const enabled = op.enabled ? op.enabled(ctx) : true;
    if (!visible || !enabled) return false;
    op.run(ctx, args);
    return true;
  }
}

export const operatorRegistry = new OperatorRegistry();

export const registerOperator = (op: Operator) => operatorRegistry.registerOperator(op);
export const runOperator = (id: string, ctx: OperatorContext, args?: any) => operatorRegistry.runOperator(id, ctx, args);


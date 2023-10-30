import type { Meta, StoryObj } from '@storybook/react';

import { ScrollExampleOne } from './Scroll';

const meta: Meta<typeof ScrollExampleOne> = {
    component: ScrollExampleOne,
};

type Story = StoryObj<typeof ScrollExampleOne>

export const ScrollStandard: Story = {
    render: () => <ScrollExampleOne />
}

export default meta;
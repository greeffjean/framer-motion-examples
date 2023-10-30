import type { Meta, StoryObj } from '@storybook/react';

import { GroovyButton } from './Button';

const meta: Meta<typeof GroovyButton> = {
    component: GroovyButton,
};

type Story = StoryObj<typeof GroovyButton>

export const GroovyButtonStandard: Story = {
    render: () => <GroovyButton />
}

export default meta;
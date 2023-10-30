import type { Meta, StoryObj } from '@storybook/react';

import { TextAreaSpring } from './TextArea';

const meta: Meta<typeof TextAreaSpring> = {
    component: TextAreaSpring,
};

type Story = StoryObj<typeof TextAreaSpring>

export const Spring: Story = {
    render: () => <TextAreaSpring />
}

export default meta;